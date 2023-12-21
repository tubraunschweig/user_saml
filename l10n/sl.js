OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Ta uporabniški račun je onemogočen. Stopite v stik s skrbnikom sistema.",
    "Saved" : "Shranjeno",
    "Provider" : "Ponudnik",
    "Unknown error, please check the log file for more details." : "Neznana napaka; več podrobnosti je zapisanih v dnevniški datoteki.",
    "Direct log in" : "Račun ni zagotovljen",
    "SSO & SAML log in" : "Prijava SSO in SAML",
    "This page should not be visited directly." : "Ta strani naj ne bi bilo mogoče obiskati neposredno.",
    "Provider " : "Ponudnik",
    "X.509 certificate of the Service Provider" : "Potrdilo X.509 ponudnika storitev",
    "Private key of the Service Provider" : "Zasebni ključ ponudnika storitev",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Določa, da bo ID imena <samlp:logoutRequest> poslan s tega ponudnika storitev, šifriran.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Določa, ali naj bodo sporočila,  <samlp:AuthnRequest>poslana prek tega spletnega ponudnika, podpisana. [Ponudnik omogoča pregled metapodatkov med podrobnostmi]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Določa, ali naj bodo sporočila, <samlp:logoutRequest> poslana s tega spletnega ponudnika, podpisana.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Določa, ali naj bodo sporočila, <samlp:logoutResponse>poslana prek tega spletnega ponudnika, podpisana.",
    "Whether the metadata should be signed." : "Ali naj bodo metapodatki podpisani.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Določa zahtevo, da bodo predmeti <samlp:Response>, <samlp:LogoutRequest> in <samlp:LogoutResponse>, prejeti prek ponudnika storitev, podpisani.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Določa zahtevo, da bodo  predmeti, <saml:Assertion>prejeti prek ponudnika storitev, šifrirani. [Podrobnosti so zavedene med metapodatki ponudnika.]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Določa zahtevo, da bodo predmeti, <saml:Assertion>prejeti s ponudnika storitev, šifrirani.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Določa zahtevo, da bo ID imena, prejetega prek ponudnika storitev v okviru odziva SAML, obvezen podatek.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Določa zahtevo, da bo ID imena, prejetega s ponudnika storitev, šifrirani.",
    "Indicates if the SP will validate all received XML." : "Določa, ali bo ponudnik storitev overil vse prejete datoteke XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "Protokol ADFS URL kodira podatke SAML v malih črkah, orodja pa privzeto uporabljajo velike. Za overitev podpisa mora biti v primeru ADFS možnost omogočena.",
    "Algorithm that the toolkit will use on signing process." : "Algoritem, ki ga uporabljajo orodja za postopek prijave.",
    "Attribute to map the UID to." : "Atribut za preslikavo UID.",
    "Attribute to map the displayname to." : "Atribut za preslikavo prikaznega imena.",
    "Attribute to map the email address to." : "Atribut za preslikavo elektronskega naslova.",
    "Attribute to map the quota to." : "Atribut za preslikavo količinske omejitve.",
    "Attribute to map the users home to." : "Atribut za preslikavo uporabnikove osebne mape.",
    "Attribute to map the users groups to." : "Atribut za preslikavo uporabniških skupin.",
    "Email address" : "Elektronski naslov",
    "Encrypted" : "Šifrirano",
    "Entity" : "Entiteta",
    "Kerberos" : "Kerberos",
    "Persistent" : "Nenehno",
    "Transient" : "Prehodno",
    "Unspecified" : "Nedoločeno",
    "Windows domain qualified name" : "Ime domene Windows",
    "X509 subject name" : "Ime predmeta X509",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Uporabi overitev SAML za odjemalec %s (zahteva ponovno overitev uporabnika)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Izbirno prikazno ime ponudnika istovetnosti (privzeto: »Prijava SSO in SAML«)",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Dovoli uporabo več uporabniških računov (na primer LDAP)",
    "SSO & SAML authentication" : "Overitev SSO in SAML",
    "Authenticate using single sign-on" : "Overi z uporabo enojne prijave",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Uporaba programa SSO & SAML omogoča uporabo obstoječih možnosti enkratne prijave tudi za okolje Nextcloud. Prav tako je mogoče uporabiti povezavo z Nextcloud LDAP za enostavnejše delo (npr. pri skupni rabi).\nTrenutno so podprte in preizkušene storitve:\n\n* ** SAML 2.0 **\n* OneLogin\n* Shibboleth\n* Active Directory Federation Services (ADFS)\n\n* ** Preverjanje pristnosti prek spremenljivke okolja **\n* Kerberos (mod_auth_kerb)\n* Katerikoli drug ponudnik, ki omogoča overjanje z uporabo spremenljivke okolja\n\nČeprav je za overjanje na razpolago takorekoč katerikoli drug ponudnik overjanja, ki podpira izvajanje navedenih standardov, je pomembno vedeti, da ti niso vključeni v nobeno uradno preizkusno okolje.",
    "Open documentation" : "Odpri dokumentacijo",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Izberite, ali naj se overitev izvede z uporabo vgrajene možnosti SAML v okolju Nextcloud ali pa bo overitev potekala z uporabo okoljskih spremenljivk.",
    "Use built-in SAML authentication" : "Uporabi vgrajeno overitev SAML",
    "Use environment variable" : "Uporabi okoljsko spremenljivko",
    "Global settings" : "Splošne nastavitve",
    "Remove identity provider" : "Odstrani ponudnika istovetnosti",
    "Add identity provider" : "Dodaj ponudnika istovetnosti",
    "General" : "Splošno",
    "Service Provider Data" : "Podatki ponudnika storitev",
    "If your Service Provider should use certificates you can optionally specify them here." : "Če naj ponudnik storitve uporabi potrdilo, ga je izbirno mogoče določiti na tem mestu.",
    "Show Service Provider settings…" : "Pokaži nastavitve ponudnika storitve ...",
    "Name ID format" : "Zapis določila ID imena",
    "Identity Provider Data" : "Podatki ponudnika istovetnosti",
    "Configure your IdP settings here." : "Prilagoditev nastavitev IdP.",
    "Identifier of the IdP entity (must be a URI)" : "Dololilo IdP (zapisano kot naslov URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Ciljni naslov URL za IdP, kamor bo ponudnik storitev poslal sporočilo o zahtevi overitve.",
    "Show optional Identity Provider settings…" : "Pokaži izbirne nastavitve IP (ponudnika istovetnosti) ...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Ciljni naslov URL za IdP, kamor bo ponudnik storitev poslal zahtevo SLO",
    "URL Location of the IDP's SLO Response" : "Ciljni naslov URL za zahteve IDP SLO",
    "Public X.509 certificate of the IdP" : "Javno potrdilo X.509 IdP",
    "Attribute mapping" : "Preslikave atributov",
    "If you want to optionally map attributes to the user you can configure these here." : "Če želite izbirno preslikati atribute na uporabnika, lahko to nastavite na tem mestu.",
    "Show attribute mapping settings…" : "Pokaži nastavitve preslikave atributov ...",
    "Security settings" : "Varnostne nastavitve",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Iz varnostnih razlogov je priporočljivo omogočiti nekatere nastavitve, če so te podprte znotraj zagnanega okolja.",
    "Show security settings…" : "Pokaži varnostne nastavitve ...",
    "Signatures and encryption offered" : "Ponujeno podpisovanje in šifriranje",
    "Signatures and encryption required" : "Zahtevano podpisovanje in šifriranje",
    "Download metadata XML" : "Prejmi datoteko metapodatkov XML",
    "Reset settings" : "Ponastavi nastavitve",
    "Metadata invalid" : "Neveljavni metapodatki",
    "Metadata valid" : "Veljavni metapodatki",
    "Error" : "Napaka",
    "Account not provisioned." : "Račun ni povezan.",
    "Your account is not provisioned, access to this service is thus not possible." : "Naveden račun ni povezan, zato dostop do te storitve ni mogoč.",
    "Login options:" : "Možnosti prijave:",
    "Choose a authentication provider" : "Izbor ponudnika overitve"
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");
