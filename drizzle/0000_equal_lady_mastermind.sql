CREATE TABLE `studio_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`details` text NOT NULL,
	`created_at` text NOT NULL
);
