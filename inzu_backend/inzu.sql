--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: accounts_useraccount; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.accounts_useraccount (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    is_active boolean NOT NULL,
    is_staff boolean NOT NULL
);


ALTER TABLE public.accounts_useraccount OWNER TO arsene;

--
-- Name: accounts_useraccount_groups; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.accounts_useraccount_groups (
    id integer NOT NULL,
    useraccount_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.accounts_useraccount_groups OWNER TO arsene;

--
-- Name: accounts_useraccount_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.accounts_useraccount_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_useraccount_groups_id_seq OWNER TO arsene;

--
-- Name: accounts_useraccount_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.accounts_useraccount_groups_id_seq OWNED BY public.accounts_useraccount_groups.id;


--
-- Name: accounts_useraccount_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.accounts_useraccount_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_useraccount_id_seq OWNER TO arsene;

--
-- Name: accounts_useraccount_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.accounts_useraccount_id_seq OWNED BY public.accounts_useraccount.id;


--
-- Name: accounts_useraccount_user_permissions; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.accounts_useraccount_user_permissions (
    id integer NOT NULL,
    useraccount_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.accounts_useraccount_user_permissions OWNER TO arsene;

--
-- Name: accounts_useraccount_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.accounts_useraccount_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_useraccount_user_permissions_id_seq OWNER TO arsene;

--
-- Name: accounts_useraccount_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.accounts_useraccount_user_permissions_id_seq OWNED BY public.accounts_useraccount_user_permissions.id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO arsene;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO arsene;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO arsene;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO arsene;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO arsene;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO arsene;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: contacts_contact; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.contacts_contact (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    email character varying(100) NOT NULL,
    subject character varying(100) NOT NULL,
    message text NOT NULL,
    contact_date timestamp with time zone NOT NULL
);


ALTER TABLE public.contacts_contact OWNER TO arsene;

--
-- Name: contacts_contact_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.contacts_contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_contact_id_seq OWNER TO arsene;

--
-- Name: contacts_contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.contacts_contact_id_seq OWNED BY public.contacts_contact.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO arsene;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO arsene;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO arsene;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO arsene;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO arsene;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO arsene;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO arsene;

--
-- Name: listings_listing; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.listings_listing (
    id integer NOT NULL,
    slug character varying(200) NOT NULL,
    title character varying(150) NOT NULL,
    address character varying(150) NOT NULL,
    city character varying(100) NOT NULL,
    state character varying(100) NOT NULL,
    zipcode character varying(15) NOT NULL,
    description text NOT NULL,
    sale_type character varying(50) NOT NULL,
    price integer NOT NULL,
    bedrooms integer NOT NULL,
    bathrooms numeric(2,1) NOT NULL,
    home_type character varying(50) NOT NULL,
    sqft integer NOT NULL,
    open_house boolean NOT NULL,
    photo_main character varying(100) NOT NULL,
    photo_1 character varying(100) NOT NULL,
    photo_2 character varying(100) NOT NULL,
    photo_3 character varying(100) NOT NULL,
    photo_4 character varying(100) NOT NULL,
    photo_5 character varying(100) NOT NULL,
    photo_6 character varying(100) NOT NULL,
    photo_7 character varying(100) NOT NULL,
    photo_8 character varying(100) NOT NULL,
    photo_9 character varying(100) NOT NULL,
    photo_10 character varying(100) NOT NULL,
    photo_11 character varying(100) NOT NULL,
    photo_12 character varying(100) NOT NULL,
    photo_13 character varying(100) NOT NULL,
    photo_14 character varying(100) NOT NULL,
    photo_15 character varying(100) NOT NULL,
    photo_16 character varying(100) NOT NULL,
    photo_17 character varying(100) NOT NULL,
    photo_18 character varying(100) NOT NULL,
    photo_19 character varying(100) NOT NULL,
    photo_20 character varying(100) NOT NULL,
    is_published boolean NOT NULL,
    list_date timestamp with time zone NOT NULL,
    realtor_id integer NOT NULL
);


ALTER TABLE public.listings_listing OWNER TO arsene;

--
-- Name: listings_listing_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.listings_listing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.listings_listing_id_seq OWNER TO arsene;

--
-- Name: listings_listing_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.listings_listing_id_seq OWNED BY public.listings_listing.id;


--
-- Name: realtors_realtor; Type: TABLE; Schema: public; Owner: arsene
--

CREATE TABLE public.realtors_realtor (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    photo character varying(100) NOT NULL,
    description text NOT NULL,
    phone character varying(20) NOT NULL,
    email character varying(100) NOT NULL,
    top_seller boolean NOT NULL,
    date_hired timestamp with time zone NOT NULL,
    hire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.realtors_realtor OWNER TO arsene;

--
-- Name: realtors_realtor_id_seq; Type: SEQUENCE; Schema: public; Owner: arsene
--

CREATE SEQUENCE public.realtors_realtor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.realtors_realtor_id_seq OWNER TO arsene;

--
-- Name: realtors_realtor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arsene
--

ALTER SEQUENCE public.realtors_realtor_id_seq OWNED BY public.realtors_realtor.id;


--
-- Name: accounts_useraccount id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount ALTER COLUMN id SET DEFAULT nextval('public.accounts_useraccount_id_seq'::regclass);


--
-- Name: accounts_useraccount_groups id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_groups ALTER COLUMN id SET DEFAULT nextval('public.accounts_useraccount_groups_id_seq'::regclass);


--
-- Name: accounts_useraccount_user_permissions id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.accounts_useraccount_user_permissions_id_seq'::regclass);


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: contacts_contact id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.contacts_contact ALTER COLUMN id SET DEFAULT nextval('public.contacts_contact_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: listings_listing id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.listings_listing ALTER COLUMN id SET DEFAULT nextval('public.listings_listing_id_seq'::regclass);


--
-- Name: realtors_realtor id; Type: DEFAULT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.realtors_realtor ALTER COLUMN id SET DEFAULT nextval('public.realtors_realtor_id_seq'::regclass);


--
-- Data for Name: accounts_useraccount; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.accounts_useraccount (id, password, last_login, is_superuser, email, name, is_active, is_staff) FROM stdin;
2	pbkdf2_sha256$180000$jScE2ClgHCUu$GE2bQepjaeGzN3l1OoCmAR5U1T/nOhNAo0FDs0JaqjE=	2020-08-24 16:45:57.744917+02	t	indamutsa@gmail.com	indamutsa	t	t
\.


--
-- Data for Name: accounts_useraccount_groups; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.accounts_useraccount_groups (id, useraccount_id, group_id) FROM stdin;
\.


--
-- Data for Name: accounts_useraccount_user_permissions; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.accounts_useraccount_user_permissions (id, useraccount_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add content type	4	add_contenttype
14	Can change content type	4	change_contenttype
15	Can delete content type	4	delete_contenttype
16	Can view content type	4	view_contenttype
17	Can add session	5	add_session
18	Can change session	5	change_session
19	Can delete session	5	delete_session
20	Can view session	5	view_session
21	Can add user account	6	add_useraccount
22	Can change user account	6	change_useraccount
23	Can delete user account	6	delete_useraccount
24	Can view user account	6	view_useraccount
25	Can add realtor	7	add_realtor
26	Can change realtor	7	change_realtor
27	Can delete realtor	7	delete_realtor
28	Can view realtor	7	view_realtor
29	Can add listing	8	add_listing
30	Can change listing	8	change_listing
31	Can delete listing	8	delete_listing
32	Can view listing	8	view_listing
33	Can add contact	9	add_contact
34	Can change contact	9	change_contact
35	Can delete contact	9	delete_contact
36	Can view contact	9	view_contact
37	Can add contacts	10	add_contacts
38	Can change contacts	10	change_contacts
39	Can delete contacts	10	delete_contacts
40	Can view contacts	10	view_contacts
41	Can add user	11	add_user
42	Can change user	11	change_user
43	Can delete user	11	delete_user
44	Can view user	11	view_user
\.


--
-- Data for Name: contacts_contact; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.contacts_contact (id, name, email, subject, message, contact_date) FROM stdin;
2	Jean Ngendahimana	jean@inzuestates.com	Deal	Hello Realtor, eat this money	2020-06-30 16:45:03+02
3	jasgjkags jsahfjashdas	arsichizy@gmail.com	Buying a house	Hello world	2020-06-30 17:18:55.781695+02
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-06-30 15:54:48.837005+02	1	Jean Ngendahimana	1	[{"added": {}}]	7	2
2	2020-06-30 15:56:17.560989+02	2	Jennie Jamings	1	[{"added": {}}]	7	2
3	2020-06-30 15:57:52.063287+02	3	Kyle Smith	1	[{"added": {}}]	7	2
4	2020-06-30 16:15:13.211584+02	1	4531 RockFord Mountain Lane	1	[{"added": {}}]	8	2
5	2020-06-30 16:47:47.944891+02	1		3		9	2
6	2020-06-30 16:48:15.083394+02	2	jean@inzuestates.com	2	[{"changed": {"fields": ["Name", "Email"]}}]	9	2
7	2020-06-30 16:59:54.410554+02	3	Kyle Smith	2	[{"changed": {"fields": ["Top seller"]}}]	7	2
8	2020-06-30 17:00:06.939799+02	2	Jennie Jamings	2	[{"changed": {"fields": ["Top seller"]}}]	7	2
9	2020-06-30 17:00:10.806514+02	2	Jennie Jamings	2	[]	7	2
10	2020-06-30 17:02:03.124347+02	1	4531 RockFord Mountain Lane	2	[{"changed": {"fields": ["Open house"]}}]	8	2
11	2020-06-30 17:10:21.713408+02	2	3158 Main Street	1	[{"added": {}}]	8	2
12	2020-06-30 17:13:43.473729+02	3	973 Gilbert Ferry Road Se	1	[{"added": {}}]	8	2
13	2020-08-08 12:03:53.760283+02	3	973 Gilbert Ferry Road Se	2	[{"changed": {"fields": ["Photo 5", "Photo 6", "Photo 7", "Photo 8", "Photo 9", "Photo 10", "Photo 11", "Photo 12", "Photo 13", "Photo 14", "Photo 15", "Photo 16", "Photo 17", "Photo 18", "Photo 19", "Photo 20"]}}]	8	2
14	2020-08-08 12:05:25.19128+02	2	3158 Main Street	2	[{"changed": {"fields": ["Photo 5", "Photo 6", "Photo 7", "Photo 8", "Photo 9", "Photo 10", "Photo 11", "Photo 12", "Photo 13", "Photo 14", "Photo 15", "Photo 16", "Photo 17", "Photo 18", "Photo 19", "Photo 20"]}}]	8	2
15	2020-08-08 12:07:08.53044+02	1	4531 RockFord Mountain Lane	2	[{"changed": {"fields": ["Photo 5", "Photo 6", "Photo 7", "Photo 8", "Photo 9", "Photo 10", "Photo 11", "Photo 12", "Photo 13", "Photo 14", "Photo 15", "Photo 16", "Photo 17", "Photo 18", "Photo 19", "Photo 20"]}}]	8	2
16	2020-08-08 12:25:51.086903+02	4	Schulstrasse 4  Bad Oyenhausen 32547	1	[{"added": {}}]	8	2
17	2020-08-09 09:33:07.54352+02	1	4531 RockFord Mountain Lane	2	[{"changed": {"fields": ["Photo 1"]}}]	8	2
18	2020-08-09 09:33:49.822934+02	3	973 Gilbert Ferry Road Se	2	[{"changed": {"fields": ["Photo 1", "Photo 2", "Photo 3", "Photo 4"]}}]	8	2
19	2020-08-09 09:34:15.708269+02	3	973 Gilbert Ferry Road Se	2	[{"changed": {"fields": ["Photo main"]}}]	8	2
20	2020-08-09 09:34:45.406193+02	3	973 Gilbert Ferry Road Se	2	[{"changed": {"fields": ["Photo 1", "Photo 2", "Photo 3", "Photo 4"]}}]	8	2
21	2020-08-09 09:36:06.375013+02	2	3158 Main Street	2	[{"changed": {"fields": ["Photo main", "Photo 1", "Photo 2", "Photo 3", "Photo 4"]}}]	8	2
22	2020-08-09 09:37:28.015468+02	1	4531 RockFord Mountain Lane	2	[{"changed": {"fields": ["Photo main", "Photo 1", "Photo 2", "Photo 3", "Photo 4"]}}]	8	2
23	2020-08-09 14:30:32.94959+02	3	Kyle Smith	2	[{"changed": {"fields": ["Photo"]}}]	7	2
24	2020-08-09 14:30:41.313844+02	2	Jennie Jamings	2	[{"changed": {"fields": ["Photo"]}}]	7	2
25	2020-08-09 14:30:46.268486+02	2	Jennie Jamings	2	[]	7	2
26	2020-08-09 14:30:59.95222+02	1	Jean Ngendahimana	2	[{"changed": {"fields": ["Photo"]}}]	7	2
27	2020-08-09 14:31:01.208279+02	1	Jean Ngendahimana	2	[]	7	2
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	accounts	useraccount
7	realtors	realtor
8	listings	listing
9	contacts	contact
10	contacts	contacts
11	auth	user
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-06-30 15:39:06.580921+02
2	contenttypes	0002_remove_content_type_name	2020-06-30 15:39:06.602378+02
3	auth	0001_initial	2020-06-30 15:39:06.661283+02
4	auth	0002_alter_permission_name_max_length	2020-06-30 15:39:06.711565+02
5	auth	0003_alter_user_email_max_length	2020-06-30 15:39:06.724395+02
6	auth	0004_alter_user_username_opts	2020-06-30 15:39:06.739305+02
7	auth	0005_alter_user_last_login_null	2020-06-30 15:39:06.749873+02
8	auth	0006_require_contenttypes_0002	2020-06-30 15:39:06.759035+02
9	auth	0007_alter_validators_add_error_messages	2020-06-30 15:39:06.779575+02
10	auth	0008_alter_user_username_max_length	2020-06-30 15:39:06.796574+02
11	auth	0009_alter_user_last_name_max_length	2020-06-30 15:39:06.808855+02
12	auth	0010_alter_group_name_max_length	2020-06-30 15:39:06.826334+02
13	auth	0011_update_proxy_permissions	2020-06-30 15:39:06.840735+02
14	accounts	0001_initial	2020-06-30 15:39:06.889552+02
15	admin	0001_initial	2020-06-30 15:39:06.959561+02
16	admin	0002_logentry_remove_auto_add	2020-06-30 15:39:07.02913+02
17	admin	0003_logentry_add_action_flag_choices	2020-06-30 15:39:07.061747+02
18	contacts	0001_initial	2020-06-30 15:39:07.086271+02
19	realtors	0001_initial	2020-06-30 15:39:07.10954+02
20	listings	0001_initial	2020-06-30 15:39:07.141462+02
21	sessions	0001_initial	2020-06-30 15:39:07.169104+02
22	realtors	0002_realtor_hire_date	2020-07-01 19:18:33.567146+02
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
l06w7rdiyz8v2tn18vbga35a3vshrt0d	MzQ3MzdhMTQwYjljNmQzODkzMGI2YmYzMjAzOWZmYjM5NDQ1ZjAxZTp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1NWNkNWJiYWQ0ZjBjYmQ3MjEyYWQxZWU0ZDc3MWNkOTUzYTk1MjNkIn0=	2020-07-14 15:47:38.812039+02
1pbwhs9b98y52fo3cocdyku0p7vp0x9l	MzQ3MzdhMTQwYjljNmQzODkzMGI2YmYzMjAzOWZmYjM5NDQ1ZjAxZTp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1NWNkNWJiYWQ0ZjBjYmQ3MjEyYWQxZWU0ZDc3MWNkOTUzYTk1MjNkIn0=	2020-08-22 12:00:59.920817+02
pd9zkslyg41ffmcscudjong4kg2kz0cb	MzQ3MzdhMTQwYjljNmQzODkzMGI2YmYzMjAzOWZmYjM5NDQ1ZjAxZTp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1NWNkNWJiYWQ0ZjBjYmQ3MjEyYWQxZWU0ZDc3MWNkOTUzYTk1MjNkIn0=	2020-09-07 16:42:45.916924+02
3ulo1sszaa4kmig75yqotep8t6q3area	MzQ3MzdhMTQwYjljNmQzODkzMGI2YmYzMjAzOWZmYjM5NDQ1ZjAxZTp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI1NWNkNWJiYWQ0ZjBjYmQ3MjEyYWQxZWU0ZDc3MWNkOTUzYTk1MjNkIn0=	2020-09-07 16:45:57.748694+02
\.


--
-- Data for Name: listings_listing; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.listings_listing (id, slug, title, address, city, state, zipcode, description, sale_type, price, bedrooms, bathrooms, home_type, sqft, open_house, photo_main, photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10, photo_11, photo_12, photo_13, photo_14, photo_15, photo_16, photo_17, photo_18, photo_19, photo_20, is_published, list_date, realtor_id) FROM stdin;
2	3158-Main-Street	3158 Main Street	3158 Main Street, BelleVue, Washington	Washngton	Washngton	32641	ambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more	For Rent	300000	-4	5.0	House	2000	f	photos/2020/08/09/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg	photos/2020/08/09/francesca-tosolini-lLDh9JppH2c-unsplash.jpg	photos/2020/08/09/alex-shutin-XsC0GHXi-8k-unsplash.jpg	photos/2020/08/09/francesca-tosolini-lLDh9JppH2c-unsplash_QOwbF4R.jpg	photos/2020/08/09/cosmic-timetraveler-zh_ofCt2r9c-unsplash.jpg	photos/2020/08/08/bailey-anselme-Bkp3gLygyeA-unsplash_3T80YLI.jpg	photos/2020/08/08/bailey-anselme-Bkp3gLygyeA-unsplash_udKakRk.jpg	photos/2020/08/08/bernard-hermant-KqOLr8OiQLU-unsplash.jpg	photos/2020/08/08/cosmic-timetraveler-zh_ofCt2r9c-unsplash.jpg	photos/2020/08/08/michael-glass-q91XwU6Ypyk-unsplash.jpg	photos/2020/08/08/rowan-heuvel-bjej8BY1JYQ-unsplash_FkfCNrJ.jpg	photos/2020/08/08/naomi-hebert-MP0bgaS_d1c-unsplash.jpg	photos/2020/08/08/austin-distel-jpHw8ndwJ_Q-unsplash.jpg	photos/2020/08/08/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash_MRTVStB.jpg	photos/2020/08/08/filtergrade-4T4AcGJvARQ-unsplash_faCsxZ7.jpg	photos/2020/08/08/alex-shutin-XsC0GHXi-8k-unsplash.jpg	photos/2020/08/08/chuttersnap-eXtKryPRVC8-unsplash_oDERrTX.jpg	photos/2020/08/08/francesca-tosolini-6japTIjUQoI-unsplash.jpg	photos/2020/08/08/francesca-tosolini-lLDh9JppH2c-unsplash.jpg	photos/2020/08/08/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash_qnrNHBo.jpg	photos/2020/08/08/francesca-tosolini-tHkJAMcO3QE-unsplash_jrV5qHF.jpg	t	2020-06-30 17:06:36+02	3
4	Schulstrasse-4-32547-Bad-Oyenhausen	Schulstrasse 4  Bad Oyenhausen 32547	Schulstrasse 4  Bad Oyenhausen 32547	Bremen-Volksvag	Bremen	659852	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum	For Sale	250000	4	2.0	House	2000	f	photos/2020/08/08/aaron-huber-G7sE2S4Lab4-unsplash_Aqekddy.jpg	photos/2020/08/08/alex-shutin-XsC0GHXi-8k-unsplash_n2I8hiy.jpg	photos/2020/08/08/austin-distel-jpHw8ndwJ_Q-unsplash_I8mtY1e.jpg	photos/2020/08/08/bailey-anselme-Bkp3gLygyeA-unsplash_1kRdUxH.jpg	photos/2020/08/08/bernard-hermant-KqOLr8OiQLU-unsplash_iXSFmzU.jpg	photos/2020/08/08/brandon-griggs-wR11KBaB86U-unsplash_fC0YOnv.jpg	photos/2020/08/08/christian-koch-D_4R9CcYZOk-unsplash_9PnIxq7.jpg	photos/2020/08/08/chuttersnap-eXtKryPRVC8-unsplash_jOwpEoJ.jpg	photos/2020/08/08/cosmic-timetraveler-zh_ofCt2r9c-unsplash_pInw8hO.jpg	photos/2020/08/08/daniel-barnes-RKdLlTyjm5g-unsplash_3WfdfPZ.jpg	photos/2020/08/08/filtergrade-4T4AcGJvARQ-unsplash_KmJAPbr.jpg	photos/2020/08/08/francesca-tosolini-6japTIjUQoI-unsplash_Km3HGGM.jpg	photos/2020/08/08/francesca-tosolini-LL9V0iMpStM-unsplash_7GDf0vM.jpg	photos/2020/08/08/francesca-tosolini-tHkJAMcO3QE-unsplash_iFxSj5m.jpg	photos/2020/08/08/fran-hogan-LjNpPNZWEr8-unsplash_kYJX6CN.jpg	photos/2020/08/08/maurice-williams-tPX992SVljo-unsplash.jpg	photos/2020/08/08/naomi-hebert-MP0bgaS_d1c-unsplash_tnf6oAx.jpg	photos/2020/08/08/naomi-hebert-MP0bgaS_d1c-unsplash_NnU4rIi.jpg	photos/2020/08/08/rowan-heuvel-bjej8BY1JYQ-unsplash_Q6qRzbx.jpg	photos/2020/08/08/tierra-mallorca-rgJ1J8SDEAY-unsplash_baX5N27.jpg	photos/2020/08/08/stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg	t	2020-08-08 12:07:17+02	1
3	973-Gilbert-Ferry-Road-Se-Attalla-AL	973 Gilbert Ferry Road Se	973 Gilbert Ferry Road Se, Attalla AL	Alabama City	Alabama	154545	t has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This b	For Rent	500000	5	5.0	House	2300	f	photos/2020/08/09/scott-webb-1ddol8rgUH8-unsplash.jpg	photos/2020/08/09/francesca-tosolini-XAHSexPxSus-unsplash.jpg	photos/2020/08/09/fran-hogan-LjNpPNZWEr8-unsplash.jpg	photos/2020/08/09/naomi-hebert-MP0bgaS_d1c-unsplash.jpg	photos/2020/08/09/stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg	photos/2020/08/08/brandon-griggs-wR11KBaB86U-unsplash.jpg	photos/2020/08/08/bailey-anselme-Bkp3gLygyeA-unsplash.jpg	photos/2020/08/08/brandon-griggs-wR11KBaB86U-unsplash_MvHUrex.jpg	photos/2020/08/08/christian-koch-D_4R9CcYZOk-unsplash.jpg	photos/2020/08/08/chuttersnap-eXtKryPRVC8-unsplash.jpg	photos/2020/08/08/daniel-barnes-RKdLlTyjm5g-unsplash.jpg	photos/2020/08/08/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg	photos/2020/08/08/francesca-tosolini-XAHSexPxSus-unsplash.jpg	photos/2020/08/08/francesca-tosolini-LL9V0iMpStM-unsplash.jpg	photos/2020/08/08/filtergrade-4T4AcGJvARQ-unsplash.jpg	photos/2020/08/08/neonbrand-Wp7t4cWN-68-unsplash.jpg	photos/2020/08/08/scott-webb-1ddol8rgUH8-unsplash.jpg	photos/2020/08/08/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg	photos/2020/08/08/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg	photos/2020/08/08/aaron-huber-G7sE2S4Lab4-unsplash.jpg	photos/2020/08/08/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg	t	2020-06-30 17:10:21+02	2
1	4531-rockFord-mountain-lane	4531 RockFord Mountain Lane	4531 RockFord Mountain Lane	4531 RockFord Mountain Lane	North Carolina	12451	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).	For Rent	450000	3	2.0	House	1200	f	photos/2020/08/09/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg	photos/2020/08/09/gus-ruballo-h5QNclJUiA8-unsplash.jpg	photos/2020/08/09/michael-glass-q91XwU6Ypyk-unsplash.jpg	photos/2020/08/09/steven-ungermann-CVTmLMv5oG4-unsplash.jpg	photos/2020/08/09/chuttersnap-eXtKryPRVC8-unsplash.jpg	photos/2020/08/08/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash_Vv6TeRC.jpg	photos/2020/08/08/cosmic-timetraveler-zh_ofCt2r9c-unsplash_ceGQDlZ.jpg	photos/2020/08/08/francesca-tosolini-o5ctaVlyj3s-unsplash.jpg	photos/2020/08/08/bernard-hermant-KqOLr8OiQLU-unsplash_hehrlxM.jpg	photos/2020/08/08/breno-assis-r3WAWU5Fi5Q-unsplash.jpg	photos/2020/08/08/filtergrade-4T4AcGJvARQ-unsplash_ic0ghOh.jpg	photos/2020/08/08/steven-ungermann-CVTmLMv5oG4-unsplash.jpg	photos/2020/08/08/francesca-tosolini-qnSTxcs0EEs-unsplash.jpg	photos/2020/08/08/francesca-tosolini-o5ctaVlyj3s-unsplash_7t4QJM3.jpg	photos/2020/08/08/francesca-tosolini-o5ctaVlyj3s-unsplash_pe3NpEo.jpg	photos/2020/08/08/francesca-tosolini-tHkJAMcO3QE-unsplash_7nSpZAq.jpg	photos/2020/08/08/austin-distel-jpHw8ndwJ_Q-unsplash_mwiSayH.jpg	photos/2020/08/08/fran-hogan-LjNpPNZWEr8-unsplash.jpg	photos/2020/08/08/rowan-heuvel-bjej8BY1JYQ-unsplash_WnoRpUt.jpg	photos/2020/08/08/steven-ungermann-CVTmLMv5oG4-unsplash_5olecA1.jpg	photos/2020/08/08/tierra-mallorca-rgJ1J8SDEAY-unsplash_RBuAXWl.jpg	t	2020-06-30 16:12:14+02	1
\.


--
-- Data for Name: realtors_realtor; Type: TABLE DATA; Schema: public; Owner: arsene
--

COPY public.realtors_realtor (id, name, photo, description, phone, email, top_seller, date_hired, hire_date) FROM stdin;
3	Kyle Smith	photos/2020/08/09/t1.jpg	I bring fourteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through. He provides quality service to build relationships with clients and more importantly, maintain those relationships by communicating effectively.	+33 1 09 75 83 51	smith@inzuestates.com	f	2020-06-30 15:56:17+02	2020-07-01 19:18:33.543683+02
2	Jennie Jamings	photos/2020/08/09/t2.jpg	As a Colorado native, and a seasoned real estate professional, I recognize and value the trust my clients place in me and I strive every day to exceed their expectations. I have been a leading top producer for over 18 years. My sales consistently rank in the top 1% of all Keller Williams Teams Internationally.	+1 855-766-3835	jennie@inzuestates.com	f	2020-06-30 15:54:48+02	2020-07-01 19:18:33.543683+02
1	Jean Ngendahimana	photos/2020/08/09/t4.jpg	A high-touch broker known for his extensive market knowledge and his unmatched devotion to clients, Rene's success is based almost exclusively on positive referrals. He earns the respect of his clients by working tirelessly on their behalf and by always offering them candid advice.	+49 30 901820	jean@inzuestates.com	t	2020-06-30 15:48:01+02	2020-07-01 19:18:33.543683+02
\.


--
-- Name: accounts_useraccount_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.accounts_useraccount_groups_id_seq', 1, false);


--
-- Name: accounts_useraccount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.accounts_useraccount_id_seq', 11, true);


--
-- Name: accounts_useraccount_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.accounts_useraccount_user_permissions_id_seq', 1, false);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 44, true);


--
-- Name: contacts_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.contacts_contact_id_seq', 3, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 27, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 11, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 22, true);


--
-- Name: listings_listing_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.listings_listing_id_seq', 4, true);


--
-- Name: realtors_realtor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arsene
--

SELECT pg_catalog.setval('public.realtors_realtor_id_seq', 3, true);


--
-- Name: accounts_useraccount accounts_useraccount_email_key; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount
    ADD CONSTRAINT accounts_useraccount_email_key UNIQUE (email);


--
-- Name: accounts_useraccount_groups accounts_useraccount_gro_useraccount_id_group_id_9e1772b3_uniq; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_groups
    ADD CONSTRAINT accounts_useraccount_gro_useraccount_id_group_id_9e1772b3_uniq UNIQUE (useraccount_id, group_id);


--
-- Name: accounts_useraccount_groups accounts_useraccount_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_groups
    ADD CONSTRAINT accounts_useraccount_groups_pkey PRIMARY KEY (id);


--
-- Name: accounts_useraccount accounts_useraccount_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount
    ADD CONSTRAINT accounts_useraccount_pkey PRIMARY KEY (id);


--
-- Name: accounts_useraccount_user_permissions accounts_useraccount_use_useraccount_id_permissio_54014a73_uniq; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_user_permissions
    ADD CONSTRAINT accounts_useraccount_use_useraccount_id_permissio_54014a73_uniq UNIQUE (useraccount_id, permission_id);


--
-- Name: accounts_useraccount_user_permissions accounts_useraccount_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_user_permissions
    ADD CONSTRAINT accounts_useraccount_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: contacts_contact contacts_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.contacts_contact
    ADD CONSTRAINT contacts_contact_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: listings_listing listings_listing_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.listings_listing
    ADD CONSTRAINT listings_listing_pkey PRIMARY KEY (id);


--
-- Name: listings_listing listings_listing_slug_key; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.listings_listing
    ADD CONSTRAINT listings_listing_slug_key UNIQUE (slug);


--
-- Name: realtors_realtor realtors_realtor_pkey; Type: CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.realtors_realtor
    ADD CONSTRAINT realtors_realtor_pkey PRIMARY KEY (id);


--
-- Name: accounts_useraccount_email_edd49186_like; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX accounts_useraccount_email_edd49186_like ON public.accounts_useraccount USING btree (email varchar_pattern_ops);


--
-- Name: accounts_useraccount_groups_group_id_07495d90; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX accounts_useraccount_groups_group_id_07495d90 ON public.accounts_useraccount_groups USING btree (group_id);


--
-- Name: accounts_useraccount_groups_useraccount_id_1eefb17f; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX accounts_useraccount_groups_useraccount_id_1eefb17f ON public.accounts_useraccount_groups USING btree (useraccount_id);


--
-- Name: accounts_useraccount_user_permissions_permission_id_5751e5ed; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX accounts_useraccount_user_permissions_permission_id_5751e5ed ON public.accounts_useraccount_user_permissions USING btree (permission_id);


--
-- Name: accounts_useraccount_user_permissions_useraccount_id_9ee22c82; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX accounts_useraccount_user_permissions_useraccount_id_9ee22c82 ON public.accounts_useraccount_user_permissions USING btree (useraccount_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: listings_listing_realtor_id_90583529; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX listings_listing_realtor_id_90583529 ON public.listings_listing USING btree (realtor_id);


--
-- Name: listings_listing_slug_984b866c_like; Type: INDEX; Schema: public; Owner: arsene
--

CREATE INDEX listings_listing_slug_984b866c_like ON public.listings_listing USING btree (slug varchar_pattern_ops);


--
-- Name: accounts_useraccount_groups accounts_useraccount_groups_group_id_07495d90_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_groups
    ADD CONSTRAINT accounts_useraccount_groups_group_id_07495d90_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_useraccount_user_permissions accounts_useraccount_permission_id_5751e5ed_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_user_permissions
    ADD CONSTRAINT accounts_useraccount_permission_id_5751e5ed_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_useraccount_groups accounts_useraccount_useraccount_id_1eefb17f_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_groups
    ADD CONSTRAINT accounts_useraccount_useraccount_id_1eefb17f_fk_accounts_ FOREIGN KEY (useraccount_id) REFERENCES public.accounts_useraccount(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_useraccount_user_permissions accounts_useraccount_useraccount_id_9ee22c82_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.accounts_useraccount_user_permissions
    ADD CONSTRAINT accounts_useraccount_useraccount_id_9ee22c82_fk_accounts_ FOREIGN KEY (useraccount_id) REFERENCES public.accounts_useraccount(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_accounts_useraccount_id; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_accounts_useraccount_id FOREIGN KEY (user_id) REFERENCES public.accounts_useraccount(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: listings_listing listings_listing_realtor_id_90583529_fk_realtors_realtor_id; Type: FK CONSTRAINT; Schema: public; Owner: arsene
--

ALTER TABLE ONLY public.listings_listing
    ADD CONSTRAINT listings_listing_realtor_id_90583529_fk_realtors_realtor_id FOREIGN KEY (realtor_id) REFERENCES public.realtors_realtor(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

