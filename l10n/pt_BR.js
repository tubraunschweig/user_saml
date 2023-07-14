OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Esta conta de usuário está desabilitada, contacte o administrador.",
    "Saved" : "Salvo",
    "Could not save" : "Não foi possível salvar",
    "Provider" : "Provedor",
    "Unknown error, please check the log file for more details." : "Erro desconhecido, verifique o log para mais detalhes.",
    "Direct log in" : "Login direto",
    "SSO & SAML log in" : "Login SSO & SAML",
    "This page should not be visited directly." : "Esta página não deve ser visitada diretamente.",
    "Provider " : "Provedor",
    "X.509 certificate of the Service Provider" : "Certificado X.509 do Provedor de Serviços",
    "Private key of the Service Provider" : "Chave privada do Provedor de Serviços",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indica que o ID do nome do <samlp:logoutRequest> enviado por este SP será criptografado.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indica se as mensagens <samlp:AuthnRequest> enviadas por este SP serão assinadas. [Metadados do SP oferecerá esta informação]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indica se as mensagens <samlp:logoutRequest> enviadas por este SP serão assinadas.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indica se as mensagens <samlp:logoutResponse> enviadas por este SP serão assinadas.",
    "Whether the metadata should be signed." : "Se os metadados devem ser assinados.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indica uma solicitação para os elementos <samlp:Response>, <samlp:LogoutRequest> e <samlp:LogoutResponse> recebidos por este SP a serem assinados.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indica uma solicitação para que os elementos <saml:Assertion> recebidos por este SP sejam assinados. [Metadados do SP oferecerão esta informação]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indica uma solicitação para os elementos <saml:Assertion> recebidos por este SP serem criptografados.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indica uma solicitação para que o elemento NameID no SAMLResponse recebido por este SP esteja presente.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indica uma solicitação para que o NameID recebido por este SP seja criptografado.",
    "Indicates if the SP will validate all received XML." : "Indica se o SP validará todos os XML recebidos.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL - codifica os dados do SAML como minúsculas, e o kit de ferramentas por padrão usa letras maiúsculas. Habilite para compatibilidade do ADFS na verificação de assinaturas.",
    "Algorithm that the toolkit will use on signing process." : "Algoritmo que o kit de ferramentas usará no processo de assinatura.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Recuperar parâmetros de consulta de $_SERVER. Alguns servidores SAML exigem isso em solicitações SLO.",
    "Attribute to map the UID to." : "Atributo ao qual mapear o UID.",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "Permita autenticação apenas se existir uma conta em algum outro back-end (por exemplo, LDAP).",
    "Attribute to map the displayname to." : "Atributo ao qual mapear o nome de exibição.",
    "Attribute to map the email address to." : "Atributo ao qual mapear o endereço de e-mail.",
    "Attribute to map the quota to." : "Atributo ao qual mapear a cota.",
    "Attribute to map the users groups to." : "Atributo ao qual mapear os grupos de usuários.",
    "Attribute to map the users home to." : "Atributo ao qual mapear a localidade do usuários.",
    "Attribute to map the users MFA login status" : "Atributo para mapear o status de login do MFA dos usuários",
    "Reject members of these groups. This setting has precedence over required memberships." : "Rejeitar membros desses grupos. Essa configuração tem precedência sobre as associações obrigatórias.",
    "Group A, Group B, …" : "Grupo A, Grupo B,…",
    "Require membership in these groups, if any." : "Exigir associação a esses grupos, se houver.",
    "Email address" : "Endereço de e-mail",
    "Encrypted" : "Criptografado",
    "Entity" : "Entidade",
    "Kerberos" : "Kerberos",
    "Persistent" : "Permanente",
    "Transient" : "Temporário",
    "Unspecified" : "Não especificado",
    "Windows domain qualified name" : "Nome qualificado do domínio do Windows",
    "X509 subject name" : "Nome do tópico X509",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Usar autenticação SAML para os clientes desktop %s (a reautenticação do usuário é requerida)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Nome opcional do provedor de identidade (padrão: \"Login SSO & SAML\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Permitir o uso de vários backends de usuário (por ex. LDAP)",
    "SSO & SAML authentication" : "Autenticação SSO & SAML",
    "Authenticate using single sign-on" : "Autenticar usando logon único",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Usando o aplicativo SSO & SAML do seu Nextcloud, você pode facilitar a integração da sua solução de logon único com o Nextcloud. Além disso, você pode usar o provedor de usuários LDAP do Nextcloud para facilidade dos usuários. (por exemplo, quando compartilhando)\nOs seguintes provedores são suportados e testados no momento:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Autenticação via Variáveis de Ambiente**\n\t* Kerberos (mod_auth_kerb)\n\t* Qualquer outro provedor que autentique usando variáveis de ambiente\n\nEmbora, teoricamente, qualquer outro provedor de autenticação que implemente qualquer um desses padrões seja compatível, gostaríamos de observar que eles não fazem parte de nenhuma matriz de teste interna.",
    "Open documentation" : "Abrir documentação",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Certifique-se de configurar um usuário administrativo que possa acessar a instância via SSO. Fazer o login com sua conta %s normal não será mais possível, a menos que você tenha ativado \"%s\" ou que você vá diretamente para a URL %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "Certifique-se de configurar um usuário administrativo que possa acessar a instância via SSO. Fazer o login com sua conta %s normal não será mais possível, a menos que você vá diretamente para a URL %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Por favor, escolha se deseja autenticar usando o provedor SAML integrado no Nextcloud ou se deseja autenticar com uma variável de ambiente.",
    "Use built-in SAML authentication" : "Usar a autenticação built-in SAML",
    "Use environment variable" : "Usar variável de ambiente",
    "Global settings" : "Configurações globais",
    "Remove identity provider" : "Remover provedor de identidade",
    "Add identity provider" : "Adicionar provedor de identidade",
    "General" : "Geral",
    "Service Provider Data" : "Dados do Provedor de Serviços",
    "If your Service Provider should use certificates you can optionally specify them here." : "Se o Provedor de Serviços usar certificados você pode especificá-los aqui.",
    "Show Service Provider settings…" : "Exibir as configurações do Provedor de Serviços...",
    "Name ID format" : "Formato do ID do nome",
    "Identity Provider Data" : "Dados do Provedor de Identidade",
    "Configure your IdP settings here." : "Defina suas configurações IdP aqui.",
    "Identifier of the IdP entity (must be a URI)" : "Identificador da entidade IdP (deve ser uma URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL do IdP para onde o SP enviará a mensagem de solicitação de autenticação",
    "Show optional Identity Provider settings…" : "Exibir configurações opcionais do Provedor de Identidade...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Localização da URL do IdP para onde o SP enviará a solicitação SLO",
    "URL Location of the IDP's SLO Response" : "Localização da resposta da URL do SLO do IDP",
    "Public X.509 certificate of the IdP" : "Certificado público X.509 do IdP",
    "Attribute mapping" : "Mapeamento de atributo",
    "If you want to optionally map attributes to the user you can configure these here." : "Aqui você pode opcionalmente mapear atributos aos usuários.",
    "Show attribute mapping settings…" : "Exibir configurações de mapeamento de atributos...",
    "Security settings" : "Configurações de segurança",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Para aumentar a segurança recomendamos ativar as seguinte configurações se seu ambiente suportar",
    "Show security settings…" : "Exibir configurações de segurança...",
    "Signatures and encryption offered" : "Assinaturas e criptografias oferecidas",
    "Signatures and encryption required" : "Assinaturas e criptografia requeridas",
    "User filtering" : "Filtragem de usuários",
    "If you want to optionally restrict user login depending on user data, configure it here." : "Se você deseja restringir opcionalmente o login do usuário dependendo dos dados do usuário, configure-o aqui.",
    "Show user filtering settings …" : "Mostrar configurações de filtragem do usuário…",
    "Download metadata XML" : "Baixar metadata XML",
    "Reset settings" : "Redefinir as configurações",
    "Metadata invalid" : "Metadado inválido",
    "Metadata valid" : "Metadado válido",
    "Error" : "Erro",
    "Access denied." : "Acesso negado.",
    "Your account is denied, access to this service is thus not possible." : "Sua conta foi negada, portanto, o acesso a este serviço não é possível.",
    "Account not provisioned." : "Conta não provisionada",
    "Your account is not provisioned, access to this service is thus not possible." : "Seu conta não é provisionada. O acesso a esse serviço não é possível",
    "Login options:" : "Opções de login:",
    "Choose a authentication provider" : "Escolha um provedor de autenticação"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
