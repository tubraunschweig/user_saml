OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Овај кориснички налог је искључен. Контактирајте администратора.",
    "Saved" : "Сачувано",
    "Could not save" : "Није могло да се сачува",
    "Provider" : "Провајдер",
    "Unknown error, please check the log file for more details." : "Непозната грешка. Проверите дневнике за више детаља.",
    "Direct log in" : "Директна пријава",
    "SSO & SAML log in" : "SSO & SAML пријава",
    "This page should not be visited directly." : "Ова страна не би требало да се посећује директно.",
    "Provider " : "Провајдер",
    "X.509 certificate of the Service Provider" : "X.509 сертификат провајдера услуга",
    "Private key of the Service Provider" : "Приватни кључ провајдера услуга",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Назначава да ће се nameID од <samlp:logoutRequest> који шаље добављач услуга бити шифрован.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Назначава да ли ће <samlp:AuthnRequest> поруке које шаље добављач услуга бити потписане. [метаподаци овог добављача услуга ће понудити ову информацију]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Назначава да ли ће <samlp:logoutRequest> поруке које шаље добављач услуга бити потписане.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Назначава да ли ће <samlp:logoutResponse> поруке које шаље добављач услуга бити потписане.",
    "Whether the metadata should be signed." : "Да ли метаподаци треба да буду потписани.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Назначава захтев да <samlp:Response>, <samlp:LogoutRequest> и <samlp:LogoutResponse> елементи које прима овај добављач услуга буду потписани.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Назначава захтев да <saml:Assertion> елемент који прима овај добављач услуга буде потписан. [метаподаци овог добављача услуга ће понудити ову информацију]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Назначава захтев да <saml:Assertion> елемент који прима овај добављач услуга буде шифрован.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Назначава захтев да NameID елемент који прима овај добављач услуга буде у поруци.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Назначава захтев да NameID елемент који прима овај добављач услуга буде шифрован.",
    "Indicates if the SP will validate all received XML." : "Назначава да ли ће добављач услуга валидирати сав примљени XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Енкодује SAML податке малим словима, а тулкит подразумевано користи велика слова. Укључити за ADFS компатибилност при верификацији потписа.",
    "Algorithm that the toolkit will use on signing process." : "Алгоритам који ће комплет алатки користити код процеса регистрације.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Добави параметре упита са $_SERVER. Неким SAML серверима је ово потребно у случају SLO захтева.",
    "Attribute to map the UID to." : "Атрибут на који се UID мапира.",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "Дозволи проверу идентитета само ако налог постоји на неком другом позадинском механизму (нпр. LDAP).",
    "Attribute to map the displayname to." : "Атрибут на који се displayname мапира.",
    "Attribute to map the email address to." : "Атрибут на који се мапира адреса е-поште.",
    "Attribute to map the quota to." : "Атрибут на који се мапира квота.",
    "Attribute to map the users groups to." : "Атрибут на који да се мапира корисничка група.",
    "Attribute to map the users home to." : "Атрибут на који да се мапира кориснички директоријум.",
    "Attribute to map the users MFA login status" : "Атрибут који мапира корисников MFA статус пријављивања",
    "Reject members of these groups. This setting has precedence over required memberships." : "Одбиј чланове наведених група. Ово подешавање има предност у односу на захтевана чланства.",
    "Group A, Group B, …" : "Група А, Група Б, …",
    "Require membership in these groups, if any." : "Захтевај чланство у овим групама, ако постоји било која.",
    "Email address" : "Адреса е-поште",
    "Encrypted" : "Шифровано",
    "Entity" : "Ентитет",
    "Kerberos" : "Керберос",
    "Persistent" : "Трајно сачувано",
    "Transient" : "Привремено",
    "Unspecified" : "Неодређено",
    "Windows domain qualified name" : "Квалификовано име Windows домена",
    "X509 subject name" : "X509 име субјекта",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Користи SAML проверу идентитета за %s десктоп клијенте (захтева поновну проверу идентитета)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Опциони натпис за опслужиоца идентитета (подразумевано: „SSO & SAML log in“)",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Дозволи коришћење више позадинских механизама (нпр. LDAP)",
    "SSO & SAML authentication" : "SSO & SAML провера идентитета",
    "Authenticate using single sign-on" : "Идентификујте се користећи јединствену пријаву",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Коришћењем SSO & SAML Некстклауд апликације, можете лако омогућити интеграцију у постојеће Single-Sign-On решење са Некстклаудом. Додатно, можете користити и Некстклауд LDAP добављача корисника да корисницима све буде једноставније (нпр. приликом дељења)\nСледећи добављачи су тренутно подржани и тестирани:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Идентификација преко променљивих окружења**\n\t* Kerberos (mod_auth_kerb)\n\t* Било који други провајдер који проверава идентитет преко променљивих окружења\n\nИако је, теоријски, сваки добављач провере идентитета који имплементира било који од стандарда изнад компатибилан, желели бисмо да нагласимо да они нису део интерне тест матрице.",
    "Open documentation" : "Отвори документацију",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Обезбедите подешавање којим административни корисник може да приступи инстанци преко SSO. Пријава вашим обичним %s налогом неће виши бити могућа, осим ако не укључите „%s” или одете директно на URL адресу %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "Обезбедите подешавање којим административни корисник може да приступи инстанци преко SSO. Пријава вашим обичним %s налогом неће виши бити могућа, осим ако не одете директно на URL адресу %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Одаберите желите ли да обавите проверу идентитета користећи SAML добављача уграђеног у Некстклауд или преко променљиве окружења.",
    "Use built-in SAML authentication" : "Користи уграђени SAML проверу идентитета",
    "Use environment variable" : "Користи променљиву окружења",
    "Global settings" : "Опште поставке",
    "Remove identity provider" : "Уклони провајдера идентитета",
    "Add identity provider" : "Додај провајдера идентитета",
    "General" : "Опште",
    "Service Provider Data" : "Подаци добављача услуга",
    "If your Service Provider should use certificates you can optionally specify them here." : "Ако Ваш провајдер услуга користи сертификате, можете их опционо навести овде.",
    "Show Service Provider settings…" : "Прикажи поставке провајдера услуга…",
    "Name ID format" : "Name ID формат",
    "Identity Provider Data" : "Подаци провајдера идентитета",
    "Configure your IdP settings here." : "Подесите добављача идентитета овде.",
    "Identifier of the IdP entity (must be a URI)" : "Идентификација ентитета добављача идентитета (мора бити URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL одредиште добављача идентитета где ће добављач услуга слати Authentication Request Message",
    "Show optional Identity Provider settings…" : "Прикажи опционе поставке провајдера идентитета…",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL локација добављача идентитета где ће добављач услуга послати SLO захтев",
    "URL Location of the IDP's SLO Response" : "URL адреса IDP SLO одговора",
    "Public X.509 certificate of the IdP" : "Јавни X.509 сертификат добављача идентитета",
    "Attribute mapping" : "Мапирање атрибута",
    "If you want to optionally map attributes to the user you can configure these here." : "Ако желите да опционо мапирате атрибуте на корисника, то можете учинити овде.",
    "Show attribute mapping settings…" : "Прикажи поставке мапирања атрибута…",
    "Security settings" : "Безбедоносне поставке",
    "For increased security we recommend enabling the following settings if supported by your environment." : "За повећану безбедност, препоручујемо да укључите следеће поставке, ако их Ваше окружење подржава.",
    "Show security settings…" : "Прикажи безбедоносне поставке…",
    "Signatures and encryption offered" : "Понуђено потписи и шифровање",
    "Signatures and encryption required" : "Захтевани потписи и шифровање",
    "User filtering" : "Филтрирање корисника",
    "If you want to optionally restrict user login depending on user data, configure it here." : "Ако желите да необавезно ограничите пријављивање корисника у зависности од корисничких података, подесите то овде.",
    "Show user filtering settings …" : "Прикажи подешавања филтрирања корисника…",
    "Download metadata XML" : "Скини XML метаподатака",
    "Reset settings" : "Ресетуј поставке",
    "Metadata invalid" : "Метаподаци неисправни",
    "Metadata valid" : "Метаподаци исправни",
    "Error" : "Грешка",
    "Access denied." : "Забрањен приступ",
    "Your account is denied, access to this service is thus not possible." : "Ваш налог је забрањен, тако да немате приступ овом сервису.",
    "Account not provisioned." : "Налог није добављен.",
    "Your account is not provisioned, access to this service is thus not possible." : "Ваш налог није добављен. Због тога није могућ приступ овом сервису.",
    "Login options:" : "Опције пријаве:",
    "Choose a authentication provider" : "Одаберите провајдера провере идентитета"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
