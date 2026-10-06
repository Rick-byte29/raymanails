import {getDb} from '@/db';
import {z} from 'zod';
const schema=z.object({kind:z.enum(['booking','contact','newsletter']),id:z.string().uuid(),name:z.string().trim().min(2).max(100),email:z.string().email().max(180),phone:z.string().max(24).optional(),details:z.object({service:z.string().max(100).optional(),artist:z.string().max(60).optional(),date:z.string().optional(),time:z.string().optional(),look:z.string().max(100).optional(),message:z.string().max(2000).optional(),consent:z.literal(true)})});
const services=['Signature Gel Extensions','Gel Extensions + Art','Bridal Gel Set','Classic Acrylic','Sculpted Acrylic','Acrylic + Art','Minimal Art','Chrome / French','3D Art','Builder Gel / BIAB','Rubber Base Overlay','Spa Manicure','Dual Form Extensions'];
export async function POST(request:Request){
 if(request.headers.get('origin') && request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'This request could not be accepted.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>12000)return Response.json({error:'Please shorten your message.'},{status:413});
 let value;try{value=schema.safeParse(await request.json());}catch{return Response.json({error:'Please check your details.'},{status:400});}
 if(!value.success)return Response.json({error:'Please enter valid contact details and consent.'},{status:400});
 const data=value.data;
 if(data.kind==='booking'){
  const d=data.details;const now=new Date();const date=new Date(`${d.date}T12:00:00+05:30`);const slot=new Date(`${d.date}T${d.time}:00+05:30`);
  if(!d.service||!services.includes(d.service)||!['Rayma','First available artist'].includes(d.artist||'')||!d.date||!/^\d{4}-\d{2}-\d{2}$/.test(d.date)||isNaN(date.getTime())||date.getUTCDay()===0||!['10:00','11:30','13:00','14:30','16:00','17:30'].includes(d.time||'')||slot.getTime()<now.getTime()||slot.getTime()>now.getTime()+91*86400000||!data.phone||!/^\+?[\d ()-]{8,23}$/.test(data.phone))return Response.json({error:'Choose a future appointment within 90 days, Monday–Saturday, and enter a valid phone number.'},{status:400});
 }
 try{const db=getDb();await db.$client.prepare('INSERT INTO studio_requests (id,kind,name,email,phone,details,created_at) VALUES (?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING').bind(data.id,data.kind,data.name,data.email,data.phone||null,JSON.stringify(data.details),new Date().toISOString()).run();return Response.json({id:data.id,reference:'RAY-'+data.id.slice(0,8).toUpperCase(),status:'received'},{status:201});}
 catch(error){console.error('Request save failed',error);return Response.json({error:'We could not save your request. Your details are still here; please try again.'},{status:503});}
}
