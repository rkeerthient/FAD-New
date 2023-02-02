export enum C_area {
	WOMEN_S_HEALTH = "Women's Health",
	CANCER_TREATMENT = "Cancer Treatment",
	GENERAL_MEDICINE = "General Medicine",
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

export interface EntityReference {
	entityId: string,
	name: string,
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

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export default interface Ce_specialty {
	description?: string,
	name: string,
	c_area?: C_area[],
	c_ctas?: C_ctas[],
	c_pageBannerImage?: ComplexImage,
	c_pagesFlagshipLocations?: EntityReference[],
	c_pagesSpecialtyRankingCopy?: string,
	c_pagesSubSpecialties?: ComplexImage[],
	c_primaryCTA?: C_primaryCTA,
	c_secondaryCTA?: C_secondaryCTA,
	c_subtitle?: string,
	c_treatedAt?: EntityReference[],
	c_treatedBy?: EntityReference[],
	photoGallery?: ComplexImage[],
	id: string,
	websiteUrl?: WebsiteUrl,
}
