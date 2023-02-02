export enum EmploymentType {
	FULL_TIME = "Full Time",
	PART_TIME = "Part Time",
	CONTRACTOR = "Contractor",
	TEMPORARY = "Temporary",
	INTERN = "Intern",
	VOLUNTEER = "Volunteer",
	PER_DIEM = "Per Diem",
	OTHER = "Other",
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Location {
	existingLocation?: EntityReference,
	externalLocation?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface YextBoundingBox {
	southWest: Coordinate,
	northEast: Coordinate,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum Icon {
	Briefcase = "briefcase",
	Calendar = "calendar",
	Callout = "callout",
	Chevron = "chevron",
	Document = "document",
	Info = "info",
	Kabob = "kabob",
	Link = "link",
	Office = "office",
	Person = "person",
	Pin = "pin",
	Star = "star",
	Support = "support",
	Window = "window",
}

export interface C_ctas {
	text?: string,
	url?: string,
	icon?: Icon,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Job {
	applicationUrl?: string,
	datePosted?: string,
	employmentType?: EmploymentType,
	hiringOrganization?: string,
	jobLocation?: EntityReference,
	landingPageUrl?: string,
	location?: Location,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	slug?: string,
	validThrough?: any,
	workRemote?: boolean,
	yextBoundingBox?: YextBoundingBox,
	description?: string,
	logo?: ComplexImage,
	name: string,
	c_ctas?: C_ctas[],
	c_jobDepartment?: string,
	c_primaryCTA?: C_primaryCTA,
	c_relatedSpecialty?: EntityReference[],
	c_secondaryCTA?: C_secondaryCTA,
	displayCoordinate?: Coordinate,
	keywords?: string[],
	id: string,
	timezone?: any,
	yextDisplayCoordinate?: Coordinate,
}
