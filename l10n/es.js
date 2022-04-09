OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Esta cuenta de usuario está deshabilitada. Por favor, ponte en contacto con el administrador.",
    "Saved" : "Guardado",
    "Provider" : "Proveedor",
    "Unknown error, please check the log file for more details." : "Error desconocido. Por favor, revisa el registro para más información.",
    "Direct log in" : "Inicio de sesión directo",
    "SSO & SAML log in" : "Inicio de sesión mediante SSO & SAML",
    "This page should not be visited directly." : "No se debería visitar directamente esta página.",
    "Provider " : "Proveedor",
    "X.509 certificate of the Service Provider" : "Certificado X.509 del Proveedor de Servicio",
    "Private key of the Service Provider" : "Clave privada del Proveedor de Servicio",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indica que el nameID del <samlp:logoutRequest> enviado por este SP será cifrado.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indica si los mensajes <samlp:AuthnRequest> enviados por este SP serán firmados. [Los metadatos del SP ofrecerán esta información]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indica cuando los mensajes <samlp:logoutRequest> mandados por este SP serán firmados.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indica cuando el mensaje  <samlp:logoutResponse> es enviado por este SP será firmado.",
    "Whether the metadata should be signed." : "Tal vez los metadatos deban ser firmados.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indica un requisito para los elementos <samlp:Response>, <samlp:LogoutRequest> y <samlp:LogoutResponse> recibidos por este SP a ser asignado.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indica un requisito de los elementos <saml:Assertion> recibido por este SP para ser firmados. [Metadata del SP ofrecerá este información]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indica un requisito para el elemento <saml:Assertion> recibido por este SP para ser cifrado.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indica un requisito para que el elemento NameID en el SAMLResponse recibido por este SP esté presente.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indica un requisito para que el NameID recibido por este SP esté cifrado.",
    "Indicates if the SP will validate all received XML." : "Indica si el SP validará todo el XML recibido.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Cifra datos SAML en minúsculas, y el kit de herramientas usa mayúsculas por omisión. Active ADFS para compatibilidad en la firma de verificación.",
    "Algorithm that the toolkit will use on signing process." : "El algoritmo que la herramienta usará en el proceso de firma.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Recupera los parámetros de consulta de $_SERVER. Algunos servidores SAML requieren esto en las solicitudes SLO.",
    "Attribute to map the UID to." : "Atributo para definir la UID.",
    "Attribute to map the displayname to." : "Atributo para definir el nombre mostrado",
    "Attribute to map the email address to." : "Atributo para definir la dirección de correo electrónico",
    "Attribute to map the quota to." : "Atributo para asignar la cuota a.",
    "Attribute to map the users groups to." : "Atributo para mapear los grupos de usuarios",
    "Attribute to map the users home to." : "Atributo para mapear los grupos de usuarios",
    "Email address" : "Dirección de correo",
    "Encrypted" : "Cifrado",
    "Entity" : "Entidad",
    "Kerberos" : "Kerberos",
    "Persistent" : "Persistente",
    "Transient" : "Transitorio",
    "Unspecified" : "No especificado",
    "Windows domain qualified name" : "Nombre calificado de dominio Windows",
    "X509 subject name" : "Nombre de asunto o sujeto X509",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Usar la autenticación SAML para los clientes de escritorio %s (necesita una re-autenticación del usuario)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Visualización opcional del nombre del proveedor de identidad (predeterminado: \"inicio de sesión de SSO y SAML\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Permitir el uso de back-ends de múltiples usuarios (por ejemplo, LDAP)",
    "SSO & SAML authentication" : "Autenticación SSO & SAML",
    "Authenticate using single sign-on" : "Autenticación usando single sign-on",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Usando la app SSO y SAML en tu NextCloud puedes hacer posible integrar tu solución de single sign-on con Nextcloud. Además, puedes usar el proveedor de usuarios LDAP de NextCloud para mantener la conveniencia para usuarios (p. ej., al compartir).\nLos siguientes proveedores están soportados y han sido comprobados por el momentos:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n** Autenticación vía variable de entorno**\n\t* Kerberos (mod_auth_kerb)\n\t* Cualquier otro proveedor que autentique usando la variable de entorno\n\n\tMientras que teóricamente cualquier otro proveedor de autenticación que implemente cualquiera de estos estándares es compatible, queremos hacer notar que no son parte de ninguna matriz de prueba interna",
    "Open documentation" : "Abrir documentación",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Asegúrate de configurar un usuario administrativo que puede acceder a la instancia vía SSO. Entrar con tu cuenta habitual %s no será ya posible, a no ser que hayas activado \"%s\" o vayas directamente a la URL %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you go directly to the URL %s." : "Asegúrate de configurar un usuario administrativo que puede acceder a la instancia vía SSO. Entrar con tu cuenta habitual %s no será ya posible, a no ser que vayas directamente a la URL %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Por favor elija si desea autenticar usando el proveedor SAML nativo en Nextcloud o si desea autenticar contra una variable del entorno.",
    "Use built-in SAML authentication" : "Use la autenticación nativa SAML",
    "Use environment variable" : "Usar variable de entorno",
    "Global settings" : "Ajustes globales",
    "Remove identity provider" : "Eliminar proveedor de identidad",
    "Add identity provider" : "Añadir proveedor de identidad",
    "General" : "General",
    "Service Provider Data" : "Proovedor de Servicio de Datos",
    "If your Service Provider should use certificates you can optionally specify them here." : "Si su proveedor de servicio usa certificados, se pueden opcionalmente especificar aquí.",
    "Show Service Provider settings…" : "Mostrar configuración del Proveedor de servicio",
    "Name ID format" : "Formato del ID de nombre",
    "Identity Provider Data" : "Identificación del Proveedor de Datos",
    "Configure your IdP settings here." : "Configura tus configuraciones de IdP aquí.",
    "Identifier of the IdP entity (must be a URI)" : "Identificador de la entidad IdP (debe ser un URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL objetivo del IdP donde el SP mandará el  Mensaje de Solicitud de Autenticación",
    "Show optional Identity Provider settings…" : "Mostrar configuración del Proveedor de identidad opcional...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Dirección URL de el IdP donde el SP enviará las peticiones SLO",
    "URL Location of the IDP's SLO Response" : "Dirección URL de la respuesta SLO del IDP",
    "Public X.509 certificate of the IdP" : "Certificado público X.509 del IdP",
    "Attribute mapping" : "Definición de atributos",
    "If you want to optionally map attributes to the user you can configure these here." : "Si opcionalmente quieres mapear atributos al usuario puedes configurar éstos aquí.",
    "Show attribute mapping settings…" : "Mostrar configuración de mapeado de atributos...",
    "Security settings" : "Configuración de seguridad",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Para incrementar la seguridad recomendamos activar los siguientes ajustes si son soportados por su entorno.",
    "Show security settings…" : "Mostrar configuración de seguridad...",
    "Signatures and encryption offered" : "Firmas y cifrado ofrecido",
    "Signatures and encryption required" : "Firmas y cifrado necesitado",
    "Download metadata XML" : "Descargar metadatos en XML",
    "Reset settings" : "Volver a configuración por defecto",
    "Metadata invalid" : "Metadatos inválidos",
    "Metadata valid" : "Metadatos válidos",
    "Error" : "Error",
    "Account not provisioned." : "Cuenta de usuario no aprovisionada.",
    "Your account is not provisioned, access to this service is thus not possible." : "Su cuenta no esta aprovisionada, por lo tanto el acceso a este servicio no es posible.",
    "Login options:" : "Opciones de login:",
    "Choose a authentication provider" : "Escoge un proveedor de autenticación"
},
"nplurals=2; plural=(n != 1);");
