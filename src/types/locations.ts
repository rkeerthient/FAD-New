export interface Interval {
  start?: any;
  end?: any;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export enum Category {
  BOOK_TRAVEL = "Book Travel",
  CHECK_IN = "Check in",
  FEES_POLICIES = "Fees Policies",
  FLIGHT_STATUS = "Flight Status",
  TICKETS = "Tickets",
  TICKETING = "Ticketing",
  AMENITIES = "Amenities",
  RESERVE = "Reserve",
  FRONT_DESK = "Front Desk",
  PARKING = "Parking",
  GIFT_CARD = "Gift Card",
  WAITLIST = "Waitlist",
  DELIVERY = "Delivery (Restaurant)",
  ORDER = "Order (Restaurant)",
  TAKEOUT = "Takeout",
  PICKUP = "Pickup (Restaurant)",
  MENU = "Menu",
  APPOINTMENT = "Appointment",
  PORTFOLIO = "Portfolio",
  QUOTE = "Quote",
  SERVICES = "Services (Retail)",
  STORE_ORDERS = "Store Orders",
  STORE_SHOP = "Store Shop",
  STORE_SUPPORT = "Store Support",
  SCHEDULE = "Schedule",
  SHOWTIMES = "Showtimes",
  AVAILABILITY = "Availability",
  PRICING = "Pricing",
  ACTIVITIES = "Activities",
  BOOK = "Book",
  BOOK__HOTEL_ = "Book (Hotel)",
  BOOK__RIDE_ = "Book Ride",
  BOOK__TOUR_ = "Book Tour",
  CAREERS = "Careers",
  CHARGE = "Charge",
  COUPONS = "Coupons",
  DELIVERY__RETAIL_ = "Delivery (Retail)",
  DONATE = "Donate",
  EVENTS = "Events",
  ORDER__RETAIL_ = "Order (Retail)",
  OTHER_MENU = "Other Menu",
  PICKUP__RETAIL_ = "Pickup (Retail)",
  RESERVE__PARKING_ = "Reserve (Parking)",
  SHOWS = "Shows",
  SPORTS = "Sports",
  SUPPORT = "Support",
  TEE_TIME = "Tee Time",
  GIFT_CARD__RESTAURANT_ = "Gift Card (Restaurant)",
}

export interface AppleActionLinks {
  category: Category;
  appStoreUrl: string;
  quickLinkUrl: string;
  appName: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export enum CovidVaccinesOffered {
  PFIZER = "Pfizer",
  MODERNA = "Moderna",
  JOHNSON___JOHNSON = "Johnson & Johnson",
}

export interface FrequentlyAskedQuestions {
  question: string;
  answer?: string;
}

export enum Type {
  DEPARTMENT_IN = "Department In",
  INDEPENDENT_ESTABLISHMENT_IN = "Independent Establishment In",
}

export interface GoogleEntityRelationship {
  type: Type;
  placeId: string;
}

export enum Type_1 {
  POSTAL_CODE = "Postal Code",
  REGION = "State/Region",
  COUNTY = "County",
  CITY = "City",
  SUBLOCALITY = "Sublocality",
}

export interface ServiceAreaPlaces {
  name?: string;
  type?: Type_1;
}

export interface Address {
  line1?: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  extraDescription?: string;
  countryCode?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
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
  text?: string;
  url?: string;
  icon?: Icon;
}

export enum C_facilityType {
  URGENT_CARE = "Urgent Care",
  EMERGENCY_ROOM = "Emergency Room",
  HOSPITAL = "Hospital",
  DEPARTMENT = "Department",
  OFFICE = "Office",
}

export interface EntityReference {
  entityId: string;
  name: string;
}

export enum LinkType {
  OTHER = "Other",
  URL = "URL",
  PHONE = "Phone",
  EMAIL = "Email",
}

export interface C_primaryCTA {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export interface C_secondaryCTA {
  label?: string;
  linkType?: LinkType;
  link?: string;
}

export enum Type_2 {
  NONE = "None",
  BOOK_NOW = "Book Now",
  CALL_NOW = "Call Now",
  CONTACT_US = "Contact Us",
  SEND_MESSAGE = "Send Message",
  USE_APP = "Use App",
  PLAY_GAME = "Play Game",
  SHOP_NOW = "Shop Now",
  SIGN_UP = "Sign Up",
  WATCH_VIDEO = "Watch Video",
  SEND_EMAIL = "Send Email",
  LEARN_MORE = "Learn More",
  PURCHASE_GIFT_CARDS = "Purchase Gift Cards",
  ORDER_NOW = "Order Now",
  FOLLOW_PAGE = "Follow Page",
}

export interface FacebookCallToAction {
  type: Type_2;
  value?: string;
}

export interface FeaturedMessage {
  description?: string;
  url?: string;
}

export enum LocationType {
  LOCATION = "Location",
  HEALTHCARE_FACILITY = "Healthcare Facility",
  HEALTHCARE_PROFESSIONAL = "Healthcare Professional",
  ATM = "ATM",
  RESTAURANT = "Restaurant",
  HOTEL = "Hotel",
}

export interface MenuUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface OrderUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export enum PaymentOptions {
  ALIPAY = "AliPay",
  AMERICANEXPRESS = "American Express",
  ANDROIDPAY = "Google Pay",
  APPLEPAY = "Apple Pay",
  ATM = "ATM",
  ATMQUICK = "ATM Quick",
  BACS = "BACS",
  BANCONTACT = "Bancontact",
  BANKDEPOSIT = "Bank Deposit",
  BGO = "Bank/Giro Overschrijving",
  BITCOIN = "Bitcoin",
  Bar = "Bargeld",
  CARTASI = "CartaSi",
  CASH = "Cash",
  CCS = "CCS",
  CHECK = "Check",
  CONB = "Contactloos betalen",
  CVVV = "Cadeaubon/VVV bon",
  DEBITNOTE = "Debit Note",
  DINERSCLUB = "Diners Club",
  DIRECTDEBIT = "Direct Debit",
  DISCOVER = "Discover",
  ECKARTE = "Girokarte",
  ECOCHEQUE = "EcoCheque",
  EKENA = "E-kena",
  EMV = "Elektronische Maaltijdcheques",
  FINANCING = "Financing",
  GOPAY = "GoPay",
  HEBAG = "He-Bag",
  IBOD = "iBOD",
  ICCARDS = "IC Cards",
  ID = "iD",
  IDEAL = "iDeal",
  INCA = "Incasso",
  INVOICE = "Invoice",
  JCB = "JCB",
  JCoinPay = "J−Coin Pay",
  JKOPAY = "JKO Pay",
  KLA = "Klantenkaart",
  KLARNA = "Klarna",
  LINEPAY = "LINE Pay",
  MAESTRO = "Maestro",
  MASTERCARD = "MasterCard",
  MIPAY = "Mi Pay",
  MONIZZE = "Monizze",
  Manuelle_Lastsch = "Manuelle Lastschrift",
  Merpay = "メルPay",
  NANACO = "nanaco",
  NEXI = "Nexi",
  OREM = "Onder Rembours",
  PAYBACKPAY = "Payback Pay",
  PAYBOX = "Paybox",
  PAYCONIQ = "Payconiq",
  PAYPAL = "PayPal",
  PAYPAY = "PayPay",
  PAYSEC = "PaySec",
  POSTEPAY = "Postepay",
  QRCODE = "QR Code Payment",
  QUICPAY = "QUICPay",
  RAKUTENEDY = "Rakuten Edy",
  RakutenPay = "楽天Pay",
  SAMSUNGPAY = "Samsung Pay",
  SODEXO = "Sodexo",
  SWISH = "Swish",
  TEST = "Test",
  TEST_2 = "rajeev",
  TICKETRESTAURANT = "Ticket Restaurant",
  TRAVELERSCHECK = "Traveler's Check",
  TWINT = "Twint",
  UNIONPAY = "China UnionPay",
  VEV = "Via een verzekering",
  VISA = "Visa",
  VISAELECTRON = "Visa Electron",
  VOB = "Vooruit betalen",
  VOUCHER = "Voucher",
  VPAY = "V PAY",
  WAON = "WAON",
  WECHATPAY = "WeChat Pay",
  WIRETRANSFER = "Wire Transfer",
  YuchoPay = "ゆうちょPay",
  AuPay = "auPay",
  DBarai = "d払い",
  Überweisung = "Banküberweisung",
}

export enum PriceRange {
  UNSPECIFIED = "Unspecified",
  ONE = "$",
  TWO = "$$",
  THREE = "$$$",
  FOUR = "$$$$",
}

export interface RankTrackingCompetitors {
  name: string;
  website: string;
}

export enum RankTrackingFrequency {
  WEEKLY = "Weekly",
  MONTHLY = "Monthly",
  QUARTERLY = "Quarterly",
}

export enum RankTrackingKeywords {
  NAME = "Name",
  PRIMARY_CATEGORY = "Primary Category",
  SECONDARY_CATEGORY = "Secondary Category",
}

export enum RankTrackingQueryTemplates {
  KEYWORD = "Keyword",
  KEYWORD_ZIP = "Keyword Zip",
  KEYWORD_CITY = "Keyword City",
  KEYWORD_IN_CITY = "Keyword in City",
  KEYWORD_NEAR_ME = "Keyword near me",
  KEYWORD_CITY_STATE = "Keyword City State",
}

export enum RankTrackingSites {
  GOOGLE_DESKTOP = "Google Desktop",
  GOOGLE_MOBILE = "Google Mobile",
  BING_DESKTOP = "Bing Desktop",
  BING_MOBILE = "Bing Mobile",
  YAHOO_DESKTOP = "Yahoo Desktop",
  YAHOO_MOBILE = "Yahoo Mobile",
}

export interface ReservationUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface ServiceArea {
  places?: string[];
}

export enum Presentation {
  BUTTON = "Button",
  LINK = "Link",
}

export interface UberLink {
  text?: string;
  presentation: Presentation;
}

export interface UberTripBranding {
  text: string;
  url: string;
  description: string;
}

export interface WebsiteUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface ComplexVideo {
  url: string;
  video?: string;
  description?: string;
}

export default interface HealthcareFacility {
  accessHours?: Hours;
  appleActionLinks?: AppleActionLinks[];
  appleBusinessDescription?: string;
  appleBusinessId?: string;
  appleBusinessIdDqe?: string;
  appleCompanyId?: string;
  appleCompanyIdDqe?: string;
  appleCoverPhoto?: Image;
  bingWebsiteOverride?: string;
  blackOwnedBusiness?: boolean;
  questionsAndAnswers?: boolean;
  covid19InformationUrl?: string;
  covidMessaging?: string;
  covidTestAppointmentUrl?: string;
  covidTestingAppointmentRequired?: boolean;
  covidTestingDriveThroughSite?: boolean;
  covidTestingIsFree?: boolean;
  covidTestingPatientRestrictions?: boolean;
  covidTestingReferralRequired?: boolean;
  covidTestingSiteInstructions?: string;
  covidVaccineAppointmentRequired?: boolean;
  covidVaccineDriveThroughSite?: boolean;
  covidVaccineInformationUrl?: string;
  covidVaccinePatientRestrictions?: boolean;
  covidVaccineReferralRequired?: boolean;
  covidVaccineSiteInstructions?: string;
  covidVaccinesOffered?: CovidVaccinesOffered[];
  facebookAbout?: string;
  facebookWebsiteOverride?: string;
  frequentlyAskedQuestions?: FrequentlyAskedQuestions[];
  fullyVaccinatedStaff?: boolean;
  geomodifier?: string;
  googleEntityRelationship?: GoogleEntityRelationship;
  googleMyBusinessLabels?: string[];
  googlePlaceId?: string;
  googleShortName?: string;
  holidayHoursConversationEnabled?: boolean;
  impressum?: string;
  landingPageUrl?: string;
  linkedInUrl?: string;
  neighborhood?: string;
  nudgeEnabled?: boolean;
  onlineServiceHours?: Hours;
  phoneticName?: string;
  pickupHours?: Hours;
  primaryConversationContact?: any;
  reviewResponseConversationEnabled?: boolean;
  serviceAreaPlaces?: ServiceAreaPlaces[];
  slug?: string;
  telehealthUrl?: string;
  what3WordsAddress?: string;
  yelpLinkedAccount?: any;
  yelpWebsiteOverride?: string;
  acceptingNewPatients?: boolean;
  additionalHoursText?: string;
  address: Address;
  addressHidden?: boolean;
  alternatePhone?: any;
  associations?: string[];
  brands?: string[];
  description?: string;
  hours?: Hours;
  logo?: ComplexImage;
  name: string;
  categories?: any;
  cityCoordinate?: Coordinate;
  closed?: boolean;
  conditionsTreated?: string[];
  c_ctas?: C_ctas[];
  c_facilityType?: C_facilityType;
  c_ourTeam?: EntityReference[];
  c_primaryCTA?: C_primaryCTA;
  c_relatedSpecialty?: EntityReference[];
  c_secondaryCTA?: C_secondaryCTA;
  displayCoordinate?: Coordinate;
  dropoffCoordinate?: Coordinate;
  emails?: string[];
  facebookOverrideCity?: string;
  facebookCoverPhoto?: Image;
  facebookCallToAction?: FacebookCallToAction;
  facebookDescriptor?: string;
  facebookEmail?: string;
  facebookLinkedAccount?: any;
  facebookName?: string;
  facebookPageUrl?: string;
  facebookParentPageId?: string;
  facebookProfilePhoto?: Image;
  facebookStoreId?: string;
  facebookVanityUrl?: string;
  fax?: any;
  featuredMessage?: FeaturedMessage;
  foursquareLinkedAccount?: any;
  photoGallery?: ComplexImage[];
  geocodedCoordinate?: Coordinate;
  gmbLinkedAccount?: any;
  googleAccountId?: string;
  googleAttributes?: any;
  googleCoverPhoto?: Image;
  googleProfilePhoto?: Image;
  googleWebsiteOverride?: string;
  yext_CONDITIONS_TREATED?: string[];
  insuranceAccepted?: string[];
  instagramHandle?: string;
  isoRegionCode?: string;
  keywords?: string[];
  languages?: string[];
  localPhone?: any;
  locationType?: LocationType;
  mainPhone?: any;
  menuUrl?: MenuUrl;
  mobilePhone?: any;
  npi?: string;
  orderUrl?: OrderUrl;
  paymentOptions?: PaymentOptions[];
  phones?: any;
  pickupCoordinate?: Coordinate;
  priceRange?: PriceRange;
  alternateNames?: string[];
  alternateWebsites?: string[];
  rankTrackingCompetitors?: RankTrackingCompetitors[];
  customKeywords?: string[];
  rankTrackingEnabled?: boolean;
  rankTrackingFrequency?: RankTrackingFrequency;
  rankTrackingKeywords?: RankTrackingKeywords[];
  rankTrackingQueryTemplates?: RankTrackingQueryTemplates[];
  rankTrackingSites?: RankTrackingSites[];
  reservationUrl?: ReservationUrl;
  routableCoordinate?: Coordinate;
  serviceArea?: ServiceArea;
  services?: string[];
  shortName35?: string;
  shortName64?: string;
  id: string;
  timezone?: any;
  tollFreePhone?: any;
  ttyPhone?: any;
  twitterHandle?: string;
  uberClientId?: string;
  uberLink?: UberLink;
  uberTripBranding?: UberTripBranding;
  walkableCoordinate?: Coordinate;
  websiteUrl?: WebsiteUrl;
  yearEstablished?: number;
  yextDisplayCoordinate?: Coordinate;
  yextDropoffCoordinate?: Coordinate;
  yextPickupCoordinate?: Coordinate;
  yextRoutableCoordinate?: Coordinate;
  yextWalkableCoordinate?: Coordinate;
  videos?: ComplexVideo[];
}
