export interface PaginationParams {
	limit: number;
	page: number;
}

export interface Pagination<T> {
	link: {
		next: string;
		previous: string;
	};
	count: number;
	results: Array<T>;
}

export enum SaleStatusEnum {
	AVAILABLE = 'AVAILABLE',
	IN_CART = 'IN_CART',
	PENDING = 'PENDING',
	BOUGHT = 'BOUGHT',
}

// ===========================================Users Auth===========================================
export interface IRegistration {
	email: string;
	password1: string;
	password2: string;
	full_name: string;
}

export interface ORegistration {
	email: string;
	full_name: string;
}

export interface IToken {
	email: string;
	password: string;
}

export interface OToken {
	refresh: string;
	access: string;
}

export interface ITokenRefresh {
	refresh: string;
}

export interface OTokenRefresh {
	access: string;
}

// ===========================================Users===========================================
export interface User {
	id: string;
	email: string;
	full_name: string;
	avatar: string;
	phone: string;
}

export interface OIsExist {
	exists: boolean;
}

export interface IPasswordRest {
	email: string;
}

export interface OPasswordRest {
	detail: string;
}

export interface IPasswordChange {
	old_password: string;
	password1: string;
	password2: string;
}

export interface OPasswordChange {
	detail: string;
}

// ===========================================Upload===========================================
export interface IFileUpload {
	file: string;
}

export interface OFileUpload {
	id: string;
	file_path: string;
	file_type: string;
	file_name: string;
	duration: number;
}

export interface IImageUpload {
	file: string;
}

export interface OImageUpload {
	id: string;
	image_path: string;
	image_type: string;
}

// ===========================================Documents===========================================
export interface Document {
	id: string;
	created: string;
	modified: string;
	name: string;
	description: string;
	title: string;
	price: number;
	sold: number;
	thumbnail: OImageUpload;
	file: OFileUpload;
	sale_status: SaleStatusEnum;
	is_selling: boolean;
	views: number;
	rating: number;
	num_of_rates: number;
	is_favorite: boolean;
}

export interface IDocumentUpload {
	name: string;
	description: string;
	title: string;
	price: number;
	image: string;
	file: string;
}

export interface ODocumentUpload {
	id: string;
	name: string;
	description: string;
	title: string;
	price: number;
	sold: number;
	thumbnail: OImageUpload;
	file: OFileUpload;
	sale_status: string;
}

export interface Data {
	data: Document[];
}

export interface IDocumentUpdate {
	name: string;
	description: string;
	title: string;
	price: number;
	image: string;
	file: string;
}

// ===========================================Courses===========================================
export enum ProgressStatusEnum {
	IN_PROGRESS = 'IN_PROGRESS',
	COMPLETED = 'COMPLETED',
}

export interface UpdateProgressOutput {
	is_completed: boolean;
}

export interface CourseDocument {
	id: string;
	modified: string;
	name: string;
	description: string;
	title: string;
	file: OFileUpload;
}

export interface Topic {
	id: string;
	name: string;
}

export interface Lesson {
	id: string;
	name: string;
	lesson_number: number;
	content: string;
	videos: OFileUpload[];
	documents: CourseDocument[];
	progress: number;
}

export interface Course {
	id: string;
	modified: string;
	name: string;
	topic: Topic;
	description: string;
	price: number;
	sold: number;
	lessons?: Lesson[];
	progress?: number;
	status: ProgressStatusEnum;
	thumbnail: OImageUpload;
	sale_status: SaleStatusEnum;
	views: number;
	rating: number;
	num_of_rates: number;
	mark: number;
	is_done_quiz?: boolean;
	is_favorite: boolean;
	docs_completed?: string[];
	videos_completed?: string[];
}

// ===========================================Comments===========================================
export interface ReplyComment {
	id: string;
	user: User;
	content: string;
}

export interface CourseComment {
	id: string;
	user: User;
	content: string;
	course_id: string;
	reply_comments: ReplyComment[];
}

// ===========================================Cart===========================================
export enum MoveEnum {
	LIST = 'LIST',
	CART = 'CART',
	FAVORITE = 'FAVORITE',
}

export interface OCart {
	id: string;
	total_price: number;
	documents: Document[];
	courses: Course[];
}

export interface FavoriteList {
	id: string;
	documents: Document[];
	courses: Course[];
}

export interface OutputAdd {
	message: string;
}

export interface OutputRemove {
	message: string;
}

// ===========================================Payment===========================================
export interface CreateOrderArg {
	documents: string[];
	courses: string[];
	total_price: number;
}

export interface OutputOrder {
	id: string;
	created: string;
	code: string;
	total_price: number;
	documents: Document[];
	courses: Course[];
	status: string;
}

export interface OutputCancel {
	message: string;
}

export interface CalculatePriceArgs {
	documents: string[];
	courses: string[];
}

export interface TotalPrice {
	total_price: number;
}

// ===========================================Rating===========================================
export enum RatingEnum {
	ONE = 1,
	TWO = 2,
	THREE = 3,
	FOUR = 4,
	FIVE = 5,
}

export interface RateDocArgs {
	document_id: string;
	rating: RatingEnum;
}

export interface RateCourseArgs {
	course_id: string;
	rating: RatingEnum;
}

export interface Rating {
	id: string;
	created: string;
	modified: string;
	user: User;
	rating: RatingEnum;
}
