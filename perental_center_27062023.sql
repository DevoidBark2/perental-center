PGDMP                          {            perental-center    15.3    15.3 e    {           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            |           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            }           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ~           1262    16877    perental-center    DATABASE     �   CREATE DATABASE "perental-center" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
 !   DROP DATABASE "perental-center";
                postgres    false            �            1259    16878    antibiotiki    TABLE     V   CREATE TABLE public.antibiotiki (
    id integer NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.antibiotiki;
       public         heap    postgres    false            �            1259    16883    antibiotiki_id_seq    SEQUENCE     �   CREATE SEQUENCE public.antibiotiki_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.antibiotiki_id_seq;
       public          postgres    false    214                       0    0    antibiotiki_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.antibiotiki_id_seq OWNED BY public.antibiotiki.id;
          public          postgres    false    215            �            1259    16884    auth    TABLE     k   CREATE TABLE public.auth (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);
    DROP TABLE public.auth;
       public         heap    postgres    false            �            1259    16889    auth_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.auth_id_seq;
       public          postgres    false    216            �           0    0    auth_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.auth_id_seq OWNED BY public.auth.id;
          public          postgres    false    217            �            1259    16890    bmp    TABLE     N   CREATE TABLE public.bmp (
    id integer NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.bmp;
       public         heap    postgres    false            �            1259    16895 
   bmp_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bmp_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.bmp_id_seq;
       public          postgres    false    218            �           0    0 
   bmp_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.bmp_id_seq OWNED BY public.bmp.id;
          public          postgres    false    219            �            1259    16896    diseases    TABLE     S   CREATE TABLE public.diseases (
    id integer NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.diseases;
       public         heap    postgres    false            �            1259    16901    diseases_id_seq    SEQUENCE     �   CREATE SEQUENCE public.diseases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.diseases_id_seq;
       public          postgres    false    220            �           0    0    diseases_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.diseases_id_seq OWNED BY public.diseases.id;
          public          postgres    false    221            �            1259    16902    immunoglobulins    TABLE     Z   CREATE TABLE public.immunoglobulins (
    id integer NOT NULL,
    label text NOT NULL
);
 #   DROP TABLE public.immunoglobulins;
       public         heap    postgres    false            �            1259    16907    immunoglobulins_id_seq    SEQUENCE     �   CREATE SEQUENCE public.immunoglobulins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.immunoglobulins_id_seq;
       public          postgres    false    222            �           0    0    immunoglobulins_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.immunoglobulins_id_seq OWNED BY public.immunoglobulins.id;
          public          postgres    false    223            �            1259    16908    mass_pri_rog    TABLE     W   CREATE TABLE public.mass_pri_rog (
    id integer NOT NULL,
    label text NOT NULL
);
     DROP TABLE public.mass_pri_rog;
       public         heap    postgres    false            �            1259    16913    mass_pri_rog_id_seq    SEQUENCE     �   CREATE SEQUENCE public.mass_pri_rog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.mass_pri_rog_id_seq;
       public          postgres    false    224            �           0    0    mass_pri_rog_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.mass_pri_rog_id_seq OWNED BY public.mass_pri_rog.id;
          public          postgres    false    225            �            1259    16938    patients    TABLE     �  CREATE TABLE public.patients (
    id integer NOT NULL,
    k_d text,
    first_name text,
    sur_name text,
    vipisan text,
    postupil text,
    perevod text,
    bsj text,
    audioscrinning text,
    fku text,
    sos_pri_post text,
    peref_kateter text,
    linia text,
    aminoven text,
    lipofundin text,
    grud_vskar text,
    smech_vskar text,
    isskus_vskar text,
    immunoglobulin text[],
    antibiotiki text[],
    bmp text,
    propiska text,
    vos_pri_post text,
    mass_pri_rog text,
    srok_gist text,
    main_disease text,
    sub_disease text[],
    last_name text,
    create_time timestamp without time zone DEFAULT now()
);
    DROP TABLE public.patients;
       public         heap    postgres    false            �            1259    16914    perevod_oritn    TABLE     X   CREATE TABLE public.perevod_oritn (
    id integer NOT NULL,
    label text NOT NULL
);
 !   DROP TABLE public.perevod_oritn;
       public         heap    postgres    false            �            1259    16919    perevod_oritn_id_seq    SEQUENCE     �   CREATE SEQUENCE public.perevod_oritn_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.perevod_oritn_id_seq;
       public          postgres    false    226            �           0    0    perevod_oritn_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.perevod_oritn_id_seq OWNED BY public.perevod_oritn.id;
          public          postgres    false    227            �            1259    16920    postupil    TABLE     S   CREATE TABLE public.postupil (
    id integer NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.postupil;
       public         heap    postgres    false            �            1259    16925    postupil_id_seq    SEQUENCE     �   CREATE SEQUENCE public.postupil_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.postupil_id_seq;
       public          postgres    false    228            �           0    0    postupil_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.postupil_id_seq OWNED BY public.postupil.id;
          public          postgres    false    229            �            1259    16926    propiska    TABLE     S   CREATE TABLE public.propiska (
    id integer NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.propiska;
       public         heap    postgres    false            �            1259    16931    propiska_id_seq    SEQUENCE     �   CREATE SEQUENCE public.propiska_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.propiska_id_seq;
       public          postgres    false    230            �           0    0    propiska_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.propiska_id_seq OWNED BY public.propiska.id;
          public          postgres    false    231            �            1259    16932 	   srok_gist    TABLE     T   CREATE TABLE public.srok_gist (
    id integer NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.srok_gist;
       public         heap    postgres    false            �            1259    16937    srok_gist_id_seq    SEQUENCE     �   CREATE SEQUENCE public.srok_gist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.srok_gist_id_seq;
       public          postgres    false    232            �           0    0    srok_gist_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.srok_gist_id_seq OWNED BY public.srok_gist.id;
          public          postgres    false    233            �            1259    16998    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16943    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    234            �           0    0    users_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.users_id_seq OWNED BY public.patients.id;
          public          postgres    false    235            �            1259    16997    users_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.users_id_seq1;
       public          postgres    false    241            �           0    0    users_id_seq1    SEQUENCE OWNED BY     >   ALTER SEQUENCE public.users_id_seq1 OWNED BY public.users.id;
          public          postgres    false    240            �            1259    16944    vipisan    TABLE     R   CREATE TABLE public.vipisan (
    id integer NOT NULL,
    label text NOT NULL
);
    DROP TABLE public.vipisan;
       public         heap    postgres    false            �            1259    16949    vipisan_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vipisan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.vipisan_id_seq;
       public          postgres    false    236            �           0    0    vipisan_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.vipisan_id_seq OWNED BY public.vipisan.id;
          public          postgres    false    237            �            1259    16950    vosrt_pri_postup    TABLE     [   CREATE TABLE public.vosrt_pri_postup (
    id integer NOT NULL,
    label text NOT NULL
);
 $   DROP TABLE public.vosrt_pri_postup;
       public         heap    postgres    false            �            1259    16955    vosrt_pri_postup_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vosrt_pri_postup_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.vosrt_pri_postup_id_seq;
       public          postgres    false    238            �           0    0    vosrt_pri_postup_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.vosrt_pri_postup_id_seq OWNED BY public.vosrt_pri_postup.id;
          public          postgres    false    239            �           2604    16956    antibiotiki id    DEFAULT     p   ALTER TABLE ONLY public.antibiotiki ALTER COLUMN id SET DEFAULT nextval('public.antibiotiki_id_seq'::regclass);
 =   ALTER TABLE public.antibiotiki ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    16957    auth id    DEFAULT     b   ALTER TABLE ONLY public.auth ALTER COLUMN id SET DEFAULT nextval('public.auth_id_seq'::regclass);
 6   ALTER TABLE public.auth ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216            �           2604    16958    bmp id    DEFAULT     `   ALTER TABLE ONLY public.bmp ALTER COLUMN id SET DEFAULT nextval('public.bmp_id_seq'::regclass);
 5   ALTER TABLE public.bmp ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            �           2604    16959    diseases id    DEFAULT     j   ALTER TABLE ONLY public.diseases ALTER COLUMN id SET DEFAULT nextval('public.diseases_id_seq'::regclass);
 :   ALTER TABLE public.diseases ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            �           2604    16960    immunoglobulins id    DEFAULT     x   ALTER TABLE ONLY public.immunoglobulins ALTER COLUMN id SET DEFAULT nextval('public.immunoglobulins_id_seq'::regclass);
 A   ALTER TABLE public.immunoglobulins ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            �           2604    16961    mass_pri_rog id    DEFAULT     r   ALTER TABLE ONLY public.mass_pri_rog ALTER COLUMN id SET DEFAULT nextval('public.mass_pri_rog_id_seq'::regclass);
 >   ALTER TABLE public.mass_pri_rog ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    16966    patients id    DEFAULT     g   ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 :   ALTER TABLE public.patients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234            �           2604    16962    perevod_oritn id    DEFAULT     t   ALTER TABLE ONLY public.perevod_oritn ALTER COLUMN id SET DEFAULT nextval('public.perevod_oritn_id_seq'::regclass);
 ?   ALTER TABLE public.perevod_oritn ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226            �           2604    16963    postupil id    DEFAULT     j   ALTER TABLE ONLY public.postupil ALTER COLUMN id SET DEFAULT nextval('public.postupil_id_seq'::regclass);
 :   ALTER TABLE public.postupil ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228            �           2604    16964    propiska id    DEFAULT     j   ALTER TABLE ONLY public.propiska ALTER COLUMN id SET DEFAULT nextval('public.propiska_id_seq'::regclass);
 :   ALTER TABLE public.propiska ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230            �           2604    16965    srok_gist id    DEFAULT     l   ALTER TABLE ONLY public.srok_gist ALTER COLUMN id SET DEFAULT nextval('public.srok_gist_id_seq'::regclass);
 ;   ALTER TABLE public.srok_gist ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    232            �           2604    17001    users id    DEFAULT     e   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq1'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    240    241            �           2604    16967 
   vipisan id    DEFAULT     h   ALTER TABLE ONLY public.vipisan ALTER COLUMN id SET DEFAULT nextval('public.vipisan_id_seq'::regclass);
 9   ALTER TABLE public.vipisan ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    236            �           2604    16968    vosrt_pri_postup id    DEFAULT     z   ALTER TABLE ONLY public.vosrt_pri_postup ALTER COLUMN id SET DEFAULT nextval('public.vosrt_pri_postup_id_seq'::regclass);
 B   ALTER TABLE public.vosrt_pri_postup ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    238            ]          0    16878    antibiotiki 
   TABLE DATA           0   COPY public.antibiotiki (id, label) FROM stdin;
    public          postgres    false    214   {i       _          0    16884    auth 
   TABLE DATA           3   COPY public.auth (id, email, password) FROM stdin;
    public          postgres    false    216   #j       a          0    16890    bmp 
   TABLE DATA           (   COPY public.bmp (id, label) FROM stdin;
    public          postgres    false    218   Nj       c          0    16896    diseases 
   TABLE DATA           -   COPY public.diseases (id, label) FROM stdin;
    public          postgres    false    220   ~j       e          0    16902    immunoglobulins 
   TABLE DATA           4   COPY public.immunoglobulins (id, label) FROM stdin;
    public          postgres    false    222   �       g          0    16908    mass_pri_rog 
   TABLE DATA           1   COPY public.mass_pri_rog (id, label) FROM stdin;
    public          postgres    false    224   ]�       q          0    16938    patients 
   TABLE DATA           ^  COPY public.patients (id, k_d, first_name, sur_name, vipisan, postupil, perevod, bsj, audioscrinning, fku, sos_pri_post, peref_kateter, linia, aminoven, lipofundin, grud_vskar, smech_vskar, isskus_vskar, immunoglobulin, antibiotiki, bmp, propiska, vos_pri_post, mass_pri_rog, srok_gist, main_disease, sub_disease, last_name, create_time) FROM stdin;
    public          postgres    false    234   ��       i          0    16914    perevod_oritn 
   TABLE DATA           2   COPY public.perevod_oritn (id, label) FROM stdin;
    public          postgres    false    226   �       k          0    16920    postupil 
   TABLE DATA           -   COPY public.postupil (id, label) FROM stdin;
    public          postgres    false    228   ۈ       m          0    16926    propiska 
   TABLE DATA           -   COPY public.propiska (id, label) FROM stdin;
    public          postgres    false    230   d�       o          0    16932 	   srok_gist 
   TABLE DATA           .   COPY public.srok_gist (id, label) FROM stdin;
    public          postgres    false    232   Љ       x          0    16998    users 
   TABLE DATA           :   COPY public.users (id, email, password, role) FROM stdin;
    public          postgres    false    241   �       s          0    16944    vipisan 
   TABLE DATA           ,   COPY public.vipisan (id, label) FROM stdin;
    public          postgres    false    236   8�       u          0    16950    vosrt_pri_postup 
   TABLE DATA           5   COPY public.vosrt_pri_postup (id, label) FROM stdin;
    public          postgres    false    238   ��       �           0    0    antibiotiki_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.antibiotiki_id_seq', 15, true);
          public          postgres    false    215            �           0    0    auth_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.auth_id_seq', 1, true);
          public          postgres    false    217            �           0    0 
   bmp_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.bmp_id_seq', 3, true);
          public          postgres    false    219            �           0    0    diseases_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.diseases_id_seq', 299, true);
          public          postgres    false    221            �           0    0    immunoglobulins_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.immunoglobulins_id_seq', 5, true);
          public          postgres    false    223            �           0    0    mass_pri_rog_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.mass_pri_rog_id_seq', 8, true);
          public          postgres    false    225            �           0    0    perevod_oritn_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.perevod_oritn_id_seq', 4, true);
          public          postgres    false    227            �           0    0    postupil_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.postupil_id_seq', 8, true);
          public          postgres    false    229            �           0    0    propiska_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.propiska_id_seq', 4, true);
          public          postgres    false    231            �           0    0    srok_gist_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.srok_gist_id_seq', 7, true);
          public          postgres    false    233            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 6, true);
          public          postgres    false    235            �           0    0    users_id_seq1    SEQUENCE SET     <   SELECT pg_catalog.setval('public.users_id_seq1', 1, false);
          public          postgres    false    240            �           0    0    vipisan_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.vipisan_id_seq', 6, true);
          public          postgres    false    237            �           0    0    vosrt_pri_postup_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.vosrt_pri_postup_id_seq', 6, true);
          public          postgres    false    239            �           2606    16970    antibiotiki antibiotiki_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.antibiotiki
    ADD CONSTRAINT antibiotiki_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.antibiotiki DROP CONSTRAINT antibiotiki_pkey;
       public            postgres    false    214            �           2606    16972    auth auth_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.auth
    ADD CONSTRAINT auth_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.auth DROP CONSTRAINT auth_pkey;
       public            postgres    false    216            �           2606    16974    bmp bmp_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.bmp
    ADD CONSTRAINT bmp_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.bmp DROP CONSTRAINT bmp_pkey;
       public            postgres    false    218            �           2606    16976    diseases diseases_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.diseases
    ADD CONSTRAINT diseases_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.diseases DROP CONSTRAINT diseases_pkey;
       public            postgres    false    220            �           2606    16978 $   immunoglobulins immunoglobulins_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.immunoglobulins
    ADD CONSTRAINT immunoglobulins_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.immunoglobulins DROP CONSTRAINT immunoglobulins_pkey;
       public            postgres    false    222            �           2606    16980    mass_pri_rog mass_pri_rog_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.mass_pri_rog
    ADD CONSTRAINT mass_pri_rog_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.mass_pri_rog DROP CONSTRAINT mass_pri_rog_pkey;
       public            postgres    false    224            �           2606    16982     perevod_oritn perevod_oritn_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.perevod_oritn
    ADD CONSTRAINT perevod_oritn_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.perevod_oritn DROP CONSTRAINT perevod_oritn_pkey;
       public            postgres    false    226            �           2606    16984    propiska propiska_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.propiska
    ADD CONSTRAINT propiska_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.propiska DROP CONSTRAINT propiska_pkey;
       public            postgres    false    230            �           2606    16986    srok_gist srok_gist_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.srok_gist
    ADD CONSTRAINT srok_gist_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.srok_gist DROP CONSTRAINT srok_gist_pkey;
       public            postgres    false    232            �           2606    16988    patients users_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.patients
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.patients DROP CONSTRAINT users_pkey;
       public            postgres    false    234            �           2606    17005    users users_pkey1 
   CONSTRAINT     O   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey1 PRIMARY KEY (id);
 ;   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey1;
       public            postgres    false    241            �           2606    16990    vipisan vipisan_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.vipisan
    ADD CONSTRAINT vipisan_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.vipisan DROP CONSTRAINT vipisan_pkey;
       public            postgres    false    236            �           2606    16992 &   vosrt_pri_postup vosrt_pri_postup_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.vosrt_pri_postup
    ADD CONSTRAINT vosrt_pri_postup_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.vosrt_pri_postup DROP CONSTRAINT vosrt_pri_postup_pkey;
       public            postgres    false    238            ]   �   x�E���@D��^8L�^R,(_QVIZ�;b���Z��<ㆴ�E�S�3^����:�S_'s�#i ��>���v�/�ܙ􍅠F+w�lf��˞��Ǧb�\�,�|��A_����1Ƨ��V���pşX�x24n���C�      _      x�3�,I-.q zE�`W� l��      a       x�3�4��2�4��2漰��֋M\1z\\\ K��      c      x��]K�Gr>o���N�A.��UG/��5|��@pi� e
�	ط��P�L���� ۲va�c{z�8==�5�����_�/���Y��!:�ӝ��/����� ����?�O���2�̳|����|��_��r��������?����W��Z�迌>���!����
����\w�
i&8�f�y�%jӐ�Lf3�@ݽ��[�R�L�ѿ^p/�{������h�*<O���|��>�H�551Ͳ�G�QmF��Gsjv����eJ�:��W���1$w���-��2�<[FM��f�i���R��c�/��B�%˵�C�A�S���R�5���<S[��YZ�r��4?��a:�����Q4��Hʂ���0��݊���,�'�{���b�������c�_�\�"�g	u�y>�tU��<߀�U9�)���i3sг1���N�M�~T,<���nD�S�8�E�wpO��v0�3w=/:8��l��w��$?�IZ`۽F�����s�J��UIk�u�mH�#PX����Y9��ix~:�����w�4�3�|�o�������S��|�iY󞺽I
�ɿ���f�V�U9'4�=Oe����j��@>�+&}�c���y~�P�ک�[��'��a�E�!Y��|8�6�G��&w��`z���{��MC���Mp���Ę�E���/9��,<�65JL���+���}�j���=��;I���>�+}`�d�Fp��) '��U!2K4%+5�/�1��O�+���ĝ6X']�����ya0.��ɟ$��O�oY��l�f.:�8�q{�t�����S2�u:��Q�bPs�-�j��+8+Gja�njO��H���9p#��7��P�j�NX&���v��J���w�j���?<g���g�)�Ԣ�;���y�ç��:��i��b���$Vm��<�y.x%�3�&y��{lZ<V��Gb"�OoԗK�OaVF��烨3j�&@�mI|��\��]��X�"���"\���rj��i�#�c�/�oh*�e�f^Jq�°>6΅e��l��h��K�˪��)������>.�ܳU���K���w@�i���'��\���(���(�Ѹ��c|t*ᘞJ�Ow��f�ez�WW1��������,�j���A7f��N���|���R���a���K��)����;��N*�W���_�<�.uY�y��.E�i7���YlzN�)�I5U�*�)��%���R�S62�?rФ֍&z�r��������)'hp�Yp��~{�k����v�������0�W�y%���3W��1�	\p%%�ι�=����w$�B��U��b�,?!�:�,S3���7�\��񈸥g�d��M��`.R�XP�O�Vs��S���|{���u"v����u��12=�Q*�1B0v���tО-O�a;�h�^\���� �X�4�z时������4���w�s������%�$ ళ�@�L�mkNznMBj7�lx �Ig ;��Y1��`x���mI��i�X�/4�(�z�.5�ǳ��ɲ�8]prx2���ٖ�2�ϱ8W~3L�I��b�D7)��	�K�\�sb%���?!�kO���G��l���d�����,A�7��5i�8�_�f4�K�����q�
��w3ʒ�?F*?���HƷD_�	I��1{E_���l&`�߈����cz*_In^Ӎ�O���g�|x������?z��Yt ���8��Ƀ��z��㿹�d9 �l(��՞#��a�g�Qx��_.�١�ú�� �U	P��SJ([OT1��.��n�#��8؏�������B�B�J�L���� 4�i4x��77�u_�SD�Ȯ]"�C��ΝƮHQ��=k��g�a5ه3/�`*����f1x4s'�6Cq�H��a�t"�)J@:�����E�����E`���6���U�z�Iu��A��N��H��m�m���tC��+�o�Y�7���z\�<l�X�'�p�­��"�H*�#�oo��f^�Y�f������`���ueE�����������1`�J#��4}�!t:Qh6���RK��z��uW� �"�jɑN�#��@�z��=�){-zƽW1"��4�\t
�a���#� d\��C�W�b�tQ�������Y��</��j��EK�k�FYm5�[k�h	w�=�Ɇ+q��������D��V@=����,q!Kw�$[�O!Wk��6�e�}%Y��;�t�T����J����z�]�I &|x �f���j5�;��px�� �5/6fib�VZ !�0����6��ƲVRg&�
��Ǝ�$�@Б	����h]�I��n��sp ��AuЕ���]�l�h׌n���X4^�3��n2��$D�e��5y%��F�i�.�����@���Zv�&��GN����f��Y���,g�: Kr�G�81
�ȗ=�����	L-bT��ĕ_�#�3!��=���<�Dk�h�:��6��sA���Fm,*|cO�N�������c�����$���|Ψ���-	�cG꬟�d#WĮ�1L:·�ø:g��h���\d>����Ȯ?�]��,�~���/<�?y�����/I2��;rU!p��
�@#��.���5�c{�z� ~+�Q�@���jI�6�LSԡj��Dk�j��C�Pm'�>*n�;���1:Q�0��Cpp+��i�w��DC���ur�G���%�y.(�#c��=����������=������O���~���V�ry�됷�����%�����a��ܖKl�o�Z�)r�[����҉_������ �M�	 ��yiCS��Q1#�=ĵ�Ej���P��a��� �ז�T��jϡ9�[��v|D'`���R}ڧ��ɥx��� C��_wR}?V��P<!8#�`E���h��!H����x'Ӓ�t������������/�}��s��n%@��yjL�k�����ƨ��zr���z' �����vY����B�	G��~W��g#���z@v�(�����v�2�ϣ)��<�����TX�_�i���x#�\sA_, ����Rn���=�檇zC���|�m���C-7oW2�5'y�r���>��3��C�S��[J]d�֌�ʀ��E>�Ю��L��\���<1�y���E�([���X�+�E��1¦��\R�X��mE#P�뛺�R������Xs!����)�N`���	����"}�޸X� �d|�(2K���*T� �l�s�(�kX�4�Up[���"(Fke�rL���^Wz�l��xE��v'I�.�L��r��n�����L�s�	�k�6��_8����Sၓ?�ӪK
r�.�kHr)��eq ,�48� ޲��_˼�,�j��Ks��J������I� b5��1�ȩrW^�7�%2!�$�kPW�q6g�v����'�C��|}-3�	�U\M��K2�撀Kb׬k�ɚ0�0p������W�݆�����k���O�d;2��c|hS���1���@½'��[؅����_*��Ct��'
�Ax���5��YG5B���O�ه���{�#��*A 	�1�/?�Ԅ,75r}3�+��9N�S�ٿ��x{�0@����0�D�r�_�uߔ��A�b�g���W�����b��Q�ܤh��n�d0N6 �����"g~ޓѐRc_���]�C�\�q���44+sg����=Ч)��e�G#�����f�b���$�*��� �|0D!Q&�`84�+$�N5��zLыѮA�֝*�@CF0����ֿ������ ��Y�ٱ��iΐ/��`$�l������W���g�H���d�;ϱ�ܾ�$Y��K6 S�`�S�bp#C�20�5��E�6�	���8��6[�^2�kB9�C��I���n���_�ߐXl����&y7!�>4�,F�)J�	*�Qn)W
"M���[���>��uJr�	��)�0v5�{���f����3@5�{sp\��|��a�M_rn�K�"Ew��h��� P	  �b�Vِ�5%y�h��cE��%z�4u9>kZ��ZF�d�W��&�Ք���|x���v��"���̹R�����K���\"����,݆(�j���ir;��}�e!B(��1:��b�;Q�&W�<3`���������)O�,r�R�Ǖ�s[.GE���A"5�*H���㯍�Ҽ����4ڲX�_��9�ղ��z�2�TRٗ��$`o�2uY�;0���r���}/��*.w����O$���U�+Á��@��2�6$������7�1��,�k��UP_ny��c0m�,l'���Inn�2��D�dG8WuYd�Rx��}B�M{�!���z=M�Oņ��ڼ���]����&8���kXB����<T�c\m(�MY/|q��V]����#ڽ�����8�lQ���� ��$v�����B�P�&��$�X'x�]� l�vn}������� e\��:@|vu<�(G)��#1���uNMcz���q�b	��JM���; ʖ�z/�lۗ>r����բ���juq7�~Ħ��D0��^�ޥ�$m�@���Q�i��������*sMs"��r��v)���4 �y~�2��;��ȑ�� �а�W=��+Z")hWoS�\��F��*ɏ.����"/7�m#��[+�o��qQo�{\)l����� :>6g$��M�?(���>���>3ӡ啡+���QDGj�e��@M�@�r[~&y<�}fo��B�8x9�_��.#t#y��+.��\�݇�.���$�pϙN��{;�
gT_ݪ�2&7jU�,^�$o�>1�L1`;��\��F�dmms��W086�G��1�k��}9Q��t�po��� =��]F�F(�|���4��p��e0k�
B`n9��I5i���J>(y��6Z�C' ��_0�8/�P\�1�j�y�/G9,n��_^�u^�.�T#P���R7�f~�.�j��ǻ%7�ַ/�,&eH}m���^��y:e@���Ab;�%���t���c������ �(�p�ufyV�l�cܰ_���(���R���f4l���WJ��M�F ���yV��M�V��d1^6
��2{yW������0}�����Q��i\��FQ�q4ކ�}�)+�h�O�rQ�Ҡ�'x����;�긖���5鲟ˈڨ�$��{\ūbW���1(�Vp�Z��)�w�Y:���O����L�
x��8x������F�"����|A�r�ÜS��!���1�<�u�\{�*�s�$�>�`}��e�m�B�a�.����ˈ��@J�����w����`u4��W��5�-�}�i�"�����8OM���߻�4�Z�m��G����}�]�kS�S!2�'*$�)�`�\���^�m���X��j[�q&��P�� �����{G�hR��e�k,ϲ}n.���D)�yY�]^���	Ɇ��q�kY�4�- �������~5��j$�>*]�?�2�2�������nӎWR+�K��n1swc����ؓ"5A*�t� 2�S�H�2�2�_U9������~W�@��Z$hᔩs�:�Q3�0�\/�?W;��ǖ��adLb�|����3�|벼Q\��2f1A��J[<����~g?a���g�Ԧ�#��}P�j�mX�ö,d^>pQ7��kR��Cf�:��H<#}⦹���oL��I8H:����p��d���L�;��{�qy#�}�a��+�DA2���aL\}>���`�,��nXi�Rd�b"�萺̵�W��~x�G��	�-���X*.�T~�ZT<P	�lv�.7�E���'����2<e>�t�`2\FS������<�!YD\�I�8Ȍ
L<��.M�W�X�
�k���u�/�9Ev������ ��e�a��Pd�k�So����t�Ġn�o_K�g�sR�}ڏ��*3�IL��m���������3h5������&�{L��d�U,K|e�]�b�bu�o�����@J����YD�9��o�	l�N=�����?��
�z��(�ٸ5�Y��_4u���S.a�%�t /S�c��'�_j�t`�1X/�;.��Yld�n��f�8 `X]���E�tb�Ee#�#7*� v� k��eX^��T~������ێU�Y�W���X����]æ�b�!{I��ϑ�P�/EvL~O�e�^vڍ��R��8?����o�A�F�=��\a�0�c^���<��O\sĮ
u�奴]?DH���%bf����KV�ħ6A���;���EQnaR��r�$�q�� ��
��J%�:f
��!Z2xN��:o���F��K1��z�-���ö�y6t����Og����Ed      e   j   x�-���0D�������M��T�Ҥ�����Q�%�wwO�	;�\=/����z���7~ڋY��m/6D����g����C 6�7���
�E��IU��F�      g   J   x���	�0D��
7��Ŗ#0�$�ב�E<>�g,Uq�^Y%�M5aJڤ��=�ݽ��w���wD��w�����      q   �  x��VKNA]�O���3����� l� 	��"+	J�d�M>��{,q���U��`c"����vwu}^���X���K�)���
���+:�D��
]j�6'tC�L��~Pj:�E���/ӥ�ɡ&��Z -{����P�	k0�
s��S��]���Ã·5sd��.Q�3��A�����o*��Â��������P��ه'��y�5�*�0R�~�z]�����(�/���P��RCVP_����j����n��,S���7�ۜB�������\t��ǡ�>��*6+��F�]�[8ږ�8�E캼N��)�RCq������#�i���Pz���$��C��EtB�	ǼgC��`\�P�¬��]ߡ3����8z�d��
�A%�!{�Y~6�n���z��hG\]���(z�MA�h/�'�8	\�s�:(�h��X�B�;{$�i��D��9�'^e�UwgJP^:^��cx�p��(h6�J���)-�*�G��T�/�K���
Wc)I��,B���T�#��}q����2W�\�#a5��������XG�� VL<�y��gx�\z��A�)I�:?$��(�!c�v�IiJp>�}N�(J��<��j+h�<�m��8�*u4&����������}��n%i��p9�g�[��L�처 ��6���-�e�-�p���)�/)��obE�p�U�2'�����+�a��� e��ҽ�H2�y �F�E-?r�^=�D*�9 �}o����4���60�acY�^�7C�
'���ŕNQ=d�W_i��)�|�I�����!���	_�4S��r�+6)�=kjS%�Cu[�{�]��˴�b��?;ts�p�ɇX�{�D�񔁠9#>5��J�^�+��3|��۾�؉)}ږ?��"f�O�m����+n�R���K�      i   L   x�ɫ�0�Q}�aHx��0��x<	�Ie��nD�1�7T���B�`T>�/<�R<i4nvN6.M��6j�$�t�%�      k   y   x�3�0�3.,�0�ˈ�����B�/,�2�r/6�_آ�e��	��%�)����̠�/l����ދ�vq�Ä_�|a��۹,`B�/l�� č@�6]�}��+F��� h
T�      m   \   x����0���L��g�	�����	@@$D���ۈ���ٕcSO֞��A�Ij�B"s�0�et�q��������1���Z�����L�Q�RD^��>M      o   ;   x���� ��=	�$T�����ѻ�w()(CEC:��^LX�͂3\l���7I��	      x      x������ � �      s   e   x�3�0��.#��/l��pa�M@���*\ؤpaPzօ�\Ƹ���q���^va2P�).��z\쾰�{/6^��e�G��@j��b���� ��u�      u   :   x�3�4T��x��b��1�i�i�k�p����x������0�������� )`     