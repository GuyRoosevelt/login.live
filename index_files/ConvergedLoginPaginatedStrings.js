! function(e) {
	function o(i) {
		if(t[i]) return t[i].exports;
		var n = t[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports
	}
	var t = {};
	return o.m = e, o.c = t, o.p = "", o(0)
}([function(e, o, t) {
	var i = t(1),
		n = t(2),
		r = t(3),
		_ = n.StringsVariantId;
	i.registerSource("str", function(e, o) {
		switch(e.MOBILE_STR_Header_Brand = "Microsoft account", e.CT_STR_CookieBanner_Link_AriaLabel = "Learn more about Microsoft's Cookie Policy", o.AC) {
			case _.CombinedSigninSignup:
				e.WF_STR_HeaderDefault_Title = "Hi there!";
				break;
			case _.CombinedSigninSignupV2WelcomeTitle:
				e.WF_STR_HeaderDefault_Title = "Welcome";
				break;
			default:
				e.WF_STR_HeaderDefault_Title = o.bS
		}
		if(o.D && o.D.friendlyAppName)
			if(o.A2) {
				var t = o.aX ? "to continue to {0}" : "Continue to {0}";
				e.WF_STR_App_Title = r.format(t, o.D.friendlyAppName)
			} else e.WF_STR_HeaderDefault_Title = r.format("Sign in to {0}", o.D.friendlyAppName);
		switch(o.AC) {
			case _.SkypeMoveAlias:
				e.WF_STR_Default_Desc = "To continue, verify the password for your Microsoft account.";
				break;
			case _.CombinedSigninSignup:
			case _.CombinedSigninSignupDefaultTitle:
				e.WF_STR_Default_Desc = 'This works with Microsoft accounts. Let\'s see if you have one. <a href="#" id="learnMoreLink" target="_top">What\'s this?</a>';
				break;
			case _.RemoteConnectLogin:
				e.WF_STR_Default_Desc = 'Use your Microsoft account to sign in to {0}. <a href="#" id="learnMoreLink" target="_top">What\'s this?</a>';
				break;
			case _.CombinedSigninSignupV2:
				e.WF_STR_Default_Desc = "We'll check to see if you already have a Microsoft account.";
				break;
			case _.CombinedSigninSignupV2WelcomeTitle:
				e.WF_STR_Default_Desc = "Let's see if you already have an account with us."
		}
		e.WF_STR_LearnMoreLink_Text = "What's this?", e.WF_STR_ProgressText = "Please wait", e.WF_STR_ThisIsntMyNumber_Text = "This isn't my number", e.WF_STR_SignupLink_AriaLabel_Text = "Create a Microsoft account", e.CT_STR_More_Options_Ellipsis_AriaLabel = "Click here for more options", e.CT_STR_Error_Details_Close_AltText = "Close error details", e.MOBILE_STR_Footer_Microsoft = "Microsoft", e.MOBILE_STR_Footer_Privacy = "Privacy & cookies", e.MOBILE_STR_Footer_Terms = "Terms of use", e.WF_STR_Footer_LinkDisclaimer_Text = "Link Disclaimer", e.WF_STR_GenericError_Title = "Something went wrong and we can't sign you in right now. Please try again later.", e.CT_PWD_STR_Email_Example = "Email, phone, or Skype", e.CT_PWD_STR_Username_AriaLabel = "Enter your email, phone, or Skype.", e.CT_STR_CountryCodeError = "Please verify the country code.", e.CT_PWD_STR_PwdTB_Label = "Password", e.CT_PWD_STR_PwdTB_AriaLabel = "Enter password", e.CT_WPIL_STR_Android_UseDifferentAddress = "Use a different account", e.CT_PWD_STR_ForgotPwdLink_Text = "Forgot my password", e.CT_PWD_STR_ForgotPwdLink_SplitterText = "What kind of account do you have?", e.CT_PWD_STR_KeepMeSignedInCB_Text = "Keep me signed in", e.CT_PWD_STR_SignIn_Button = "Sign in", e.CT_PWD_STR_SignIn_Button_Next = "Next", e.CT_PWD_STR_SwitchToOTC_Link = "Sign in with a single-use code", e.CT_PWD_STR_SwitchToRemoteNGC_Link = "Use the Microsoft Authenticator app instead", e.CT_PWD_STR_SignUp_MenuLink = "Create an account", e.CT_PWD_STR_MoreOptions_Link = "More options", e.CT_PWD_STR_MoreOptions_Link_AriaLabel = "Show additional options for signing in", e.CT_PWD_STR_Error_InvalidUsername = "Enter a valid email address, phone number, or Skype name.", e.CT_PWD_STR_Error_GetCredentialTypeError = "There was an issue looking up your account. Tap Next to try again.", e.CT_PWD_STR_Error_InvalidPhoneNumber = "That phone number doesn't look right. Please check the country code and phone number.", e.CT_PWD_STR_Error_InvalidPhoneFormatting = "The phone number you entered isn't valid. Your phone number can contain numbers, spaces, and these special characters: ( ) [ ] . - # * /", e.CT_PWD_STR_Error_MissingPassword = "Please enter the password for your Microsoft account.", e.CT_PWD_STR_Error_FedNotAllowed = "You cannot use this account for this purpose because it belongs to an organization. Please choose a different account or sign up for a new one.", e.CT_PWD_STR_Error_UsernameNotExist = o.AP ? 'That Microsoft account doesn\'t exist. Enter a different account or <a href="#~#WLSignUpURL_LS#~#" id="idA_PWD_SignUp">get a new one</a>.' : "That Microsoft account doesn't exist. Please enter a different account.", e.CT_PWD_STR_PersistentCookies_Warning = "Your account will be remembered on this device.", e.CT_FED_STR_ChangeUserLink_Text = "Sign in with a different Microsoft account", e.CT_FED_STR_GoThereLink_Text = "Sign in at #~#partnerdomain#~#", e.WF_STR_ForceSI_Info = "Because you're accessing sensitive info, you need to verify your password.", e.WF_STR_SwitchUser_Title = "You're already signed in.", e.WF_STR_SwitchUser_Stay = "Remain signed in with this account.", e.WF_STR_SwitchUser_Switch = "Sign out and sign in with a different account.", e.WF_STR_Switch_SignOutDesc = "(You will be signed out of all Microsoft services you are using currently with your #~#FederatedDomainName_LS#~# account.)", e.WF_STR_Switch_DifferentID = "Sign in with a different Microsoft account", e.WF_STR_InviteBlocked_Error = "Sorry, you can't use your #~#FederatedDomainName_LS#~# account to sign in here.", e.WF_STR_ServiceBlocked_Error = "Sorry, we can't sign you in here with your #~#FederatedDomainName_LS#~# account.", e.WF_STR_IDPFailed_GenericError = "Your organization could not sign you in to this service.", e.WF_STR_IDPFailed_Error = "#~#FederatedPartnerName_LS#~# could not sign you in here.", e.WF_STR_IDPFailed_Desc1 = "Your #~#FederatedDomainName_LS#~# account may not be enabled to use this service or there may be a system error at #~#FederatedPartnerName_LS#~#.", e.WF_STR_IDPFailed_Desc2 = " Please try again later, and contact the administrator at #~#FederatedPartnerName_LS#~# if this problem persists.", e.WF_STR_IDPFailed_GenericDesc = "Please try again later, and contact the administrator at your organization if this problem persists.", e.MOBILE_STR_SignIn_MSAcctHelpHeading = "What is a Microsoft account?", e.MOBILE_STR_SignIn_MSAcctHelpDesc = "A Microsoft account is what you use to sign in to Microsoft services such as Outlook.com, Skype, OneDrive, Office, Xbox, Windows and more. Sign in for your personalized experience.", e.MOBILE_STR_SignIn_MSAcctHelpDone_Button = "OK", e.CT_HIP_ID_P_HipLockout_Info = "Help us make sure you're not a robot.", e.CT_HIP_STR_HIP_ISLOADING = "Loading ...", e.WF_STR_Lockout_AnotherID_Text = "Sign in using another Microsoft account", e.WF_STR_Lockout_Title = "Sign-in is blocked", e.WF_STR_Lockout_Desc = "Sign-in with <b>#~#MemberName_LS#~#</b> is blocked for one of these reasons:", e.WF_STR_Lockout_Reason1 = "Someone entered the wrong password too many times.", e.WF_STR_Lockout_Reason2 = "If you signed up for this account through an organization, you might not be able to use it yet.", e.WF_STR_Lockout_Reset_Text = "Reset your password", e.WF_STR_HIP_Label = "Enter these characters", e.WF_STR_HIPAudio_Label = "Enter the characters you hear", e.CT_PWD_STR_Continue_Button = "Continue", e.CT_PWD_STR_ContinueBtn_Tooltip = "You are signed in on this computer with this Microsoft account.", e.CT_PWD_STR_SignedIn_Label = "You're already signed in", e.CT_HRD_STR_Splitter_Heading = "It looks like this email is used with more than one account from Microsoft. Which one do you want to use?", e.CT_HRD_STR_Splitter_Error_Heading = "We're having trouble locating your account. Which type of account do you want to use?", e.CT_HRD_STR_Splitter_AadTile_Title = "Work or school account", e.CT_HRD_STR_Splitter_AadTile_Hint = "Created by your IT department", e.CT_HRD_STR_Splitter_MsaTile_Title = "Personal account", e.CT_HRD_STR_Splitter_MsaTile_Hint = "Created by you", e.CT_HRD_STR_Redirect_Title_GitHub = "Taking you to the GitHub sign-in page...", e.CT_HRD_STR_Splitter_Back = "Back", e.CT_HRD_STR_Redirect_Title = "Taking you to your organization's sign-in page", e.CT_HRD_STR_Redirect_Cancel = "Cancel", e.WF_STR_FIDO_ReAuthUserPrompt = "Use your PIN or Windows Hello to prove you own {0}", e.CT_IL_STR_Error_OldSkypePwd = "Your old Skype password doesn't work anymore. Try the password for your Microsoft account.", e.CT_PWD_STR_EnterPassword_Title = "Enter password", e.CT_PWD_STR_RemoteConnect_PasswordPage_Desc = "Enter the password to sign in to {0} with {1}", e.CT_OTC_STR_SignIn_ReSendInfo = "It may take a few minutes for the code to arrive. Are you sure you want to request a new code?", e.CT_OTC_STR_YesButton_Text = "Yes", e.CT_OTC_STR_NoButton_Text = "No", e.CT_OTC_STR_EnterCode_Title = "Enter code", e.CT_OTC_STR_EnterCode_Desc = "We just sent a code to {0}", e.CT_OTC_STR_EnterCode_Text = "Code", e.CT_OTC_STR_EnterCode_AriaLabel = "Enter the code you received", e.CT_OTC_STR_Error_EmptyCode = "To continue, enter the code we just sent you.", e.CT_OTC_STR_Error_CodeIncorrect = "That code didn't work. Check the code and try again.", e.CT_OTC_STR_Error_ServerError = "This service isn't available right now. Please try again later.", e.CT_OTC_STR_Error_OTCInvalid = "Please enter the 7-digit code. The code only contains numbers.", e.CT_OTC_STR_Error_SendCodeError = "We couldn't send the code. Please try again.", e.CT_OTC_STR_SMSTextbox_Label2 = "Phone number", e.CT_OTC_STR_SMSTextbox_AriaLabel = "Enter your phone number", e.CT_RNGC_STR_TimeOut_Title = "Request timeout", e.CT_RNGC_STR_TimeOut_PageDescription = "We sent a sign in request to your Microsoft Authenticator app for {0}, but we didn't get your approval.", e.CT_RNGC_STR_Denied_Title = "Request denied", e.CT_RNGC_STR_Denied_PageDescription = "We sent a sign in request to your Microsoft Authenticator app for {0}, but you denied it.", e.CT_RNGC_STR_Polling_Title = "Approve sign in", e.CT_RNGC_STR_Polling_PageDescription = "Approve the request we sent to your phone to sign in.", e.CT_RNGC_STR_Polling_PageDescription_UnfamiliarDevice = "Tap the number you see below in your Microsoft Authenticator app to sign in.", e.CT_RNGC_STR_ResendNotification_Text = "Tap Next to send another request.", e.CT_RNGC_STR_SwitchToPassword_Link = "Use your password instead", e.CT_RNGC_STR_SwitchToQrCode_Link = "Scan a QR code instead", e.CT_RNGC_STR_QR_PageDescription = "Scan the QR code to sign in with {0}.", e.CT_RNGC_STR_SwitchToPolling_Link = "Approve a push notification instead", e.CT_RNGC_STR_QR_Timeout_Title = "Request timeout", e.CT_RNGC_STR_QR_Timeout_PageDescription = "We didn't hear from you in time. Tap Next if you want to try again.", e.CT_RNGC_STR_Error_Title_SendFail = "Request wasn't sent", e.CT_RNGC_STR_Error_SendFail = "We couldn't send a notification to your phone at this time. Please try again.", e.CT_RNGC_STR_Request = "We couldn't send a notification to your phone at this time. Please try again.", e.CT_STR_ViewAgreementError = "We didn't receive a response. Please try again.", e.CT_STR_ViewAgreement_ExternalLink = "For details, please visit this site: {0}", e.CT_STR_ConfirmSend_Otc_ForceSignin = "Because you're accessing sensitive info, we'll send a code to {0} to verify your identity.", e.CT_STR_ConfirmSend_Otc_SendError = "We couldn't send a code to your phone at this time. Try again later.", e.CT_STR_ConfirmSend_Otc_SendError_Email = "We couldn't send a code to your email at this time. Try again later.", e.CT_STR_ConfirmSend_Otc_Email = "We'll send a code to {0} to sign you in.", e.CT_STR_ConfirmSend_Otc_SendCode = "Send code", e.CT_STR_ConfirmSend_RemoteNgc = "We'll send a sign-in request to your phone to sign in with {0}.", e.CT_STR_ConfirmSend_RemoteNgc_ForceSignin = "Because you're accessing sensitive info for {0}, we'll send a request to your phone to verify your identity.", e.CT_STR_ConfirmSend_RemoteNgc_SendNotification = "Send notification", e.CT_STR_PhoneDisambiguation_Title = "Confirm your phone number", e.CT_STR_CredentialPicker_Title = "Verify your identity", e.CT_STR_CredentialPicker_Description = "How would you like to verify your identity?", e.CT_STR_CredentialPicker_Option_AuthenticatorApp = "Approve a request on my Microsoft Authenticator app", e.CT_STR_CredentialPicker_Option_Fido = "Use my FIDO authenticator", e.CT_STR_CredentialPicker_Option_Password = "Enter my password", e.CT_PWD_STR_SwitchToCredPicker_Link = "Other ways to sign in", e.CT_PWD_STR_SwitchToFido_Link = "Sign in with Hello or FIDO", e.CT_PWD_STR_UseGitHub_Link = "Sign in with GitHub", e.CT_STR_OptOut_AltText = "Close banner", e.CT_PWD_STR_AltCredHint_GitHub = "Click here to sign in with GitHub", e.CT_PWD_STR_AltCredHint_AriaLabel_GitHub_CredPicker = 'Click "Other ways to sign in" to sign in with GitHub', e.CT_PWD_STR_AltCredHint_AriaLabel_GitHub_MoreOptions = 'Click "More options" to sign in with GitHub', e.CT_FIDO_STR_Page_Title = "Use Hello or FIDO to authenticate", e.CT_FIDO_STR_Page_Description = "Use Windows Hello or your FIDO device to finish your sign in. If you're not using Hello, follow the instructions that your browser or device manufacturer provided.", e.CT_FIDO_STR_TryAgain_Button = "Try again", e.CT_FIDO_STR_Error_NotFound = "We couldn't find a FIDO authenticator.", e.CT_FIDO_STR_Error_NotAllowed = "The authentication request was canceled.", e.CT_FIDO_STR_Error_Unknown = "We had a problem authenticating you. Please try again.", e.WF_STR_Confirm_Signup_Title = "Create account", e.WF_STR_Confirm_Signup_Desc = "Looks like you're new here. We'll create a new account with {0}.", e.WF_STR_Confirm_Signup_Button = "Create account", e.WF_STR_Confirm_Recover_Username_Title = "You may already have an account", e.WF_STR_Confirm_Recover_Username_Desc = "{0} is already associated with an existing account. Choose 'Back' and enter the username for that account.", e.WF_STR_Confirm_Recover_Username_Instruction = "If you don't remember the username for that account, choose 'Next' to recover it.", e.WF_STR_Confirm_Recover_Username_Signup_Link = "Create another account", e.CT_FEDCONFLICT_STR_Page_Title = "Looks like you already have an account with {0}", e.CT_FEDCONFLICT_STR_UseMicrosoft = "Sign in to this account", e.CT_FEDCONFLICT_STR_UseMicrosoft_Help_VSTS = "Recommended if you use it with Visual Studio or Microsoft Azure.", e.CT_FEDCONFLICT_STR_UseGitHub = "Continue with your GitHub credentials"
	}), i.registerSource("html", function(e, o) {
		e.CT_FED_STR_FedDomainMsg = "To sign in to this account you need to go to #~#partnerdomain#~#.", e.WF_STR_SignUpLink_Text = 'No account? <a href="#" id="signup">Create one!</a>', e.CT_OTC_STR_SendCode_SessionExpired = 'Your session has timed out. To request a single use code, please <a href="#" id="idA_ReloadPage">refresh the page</a>.', e.CT_HRD_STR_Splitter_Rename = 'Tired of seeing this? <a href="#" id="iDisambigRenameLink">Rename your personal Microsoft account.</a>', e.CT_STR_ConfirmSend_Otc = 'We\'ll send a code to {0} to sign you in. <a id="phoneDisambigLink" href="#">This isn\'t my number</a>', e.CT_STR_CookieBanner_Text = 'This site uses cookies for analytics, personalized content and ads. By continuing to browse this site, you agree to this use. <a href="#" id="msccLearnMore">Learn more</a>', 1 === o.B2 ? (e.CT_PWD_STR_Error_WrongCreds = o.c ? "The password is incorrect. Please try again." : 'Your account or password is incorrect. If you don\'t remember your password, <a id="idA_IL_ForgotPassword0" href="">reset it now.</a>', e.CT_IHL_STR_Error_WrongHip = 'Enter your password and the characters correctly. If you don\'t remember your password, <a id="idA_IHL_ForgotPassword0" href="">reset it now.</a>') : (e.CT_PWD_STR_Error_WrongCreds = o.c ? "The password is incorrect. Please try again." : 'Your account or password is incorrect. If you don\'t remember your password, <a id="idA_IL_ForgotPassword0" href="">continue without a Microsoft account.</a>', e.CT_IHL_STR_Error_WrongHip = 'Enter your password and the characters correctly. If you don\'t remember your password, <a id="idA_IHL_ForgotPassword0" href="">continue without a Microsoft account.</a>')
	})
}, function(e, o) {
	function t() {
		var e = this,
			o = {};
		e.registerSource = function(e, t) {
			o[e] = o[e] || [], o[e].push(t)
		}, e.getStrings = function(e, t) {
			for(var i = {}, n = o[e] || [], r = 0, _ = n.length; r < _; r++) n[r](i, t);
			return i
		}
	}
	var i = window;
	i.StringRepository = e.exports = i.StringRepository || new t
}, function(e, o) {
	o.Tokens = {
		Username: "#~#MemberName_LS#~#"
	}, o.Fed = {
		DomainToken: "#~#partnerdomain#~#",
		FedDomain: "#~#FederatedDomainName_LS#~#",
		Partner: "#~#FederatedPartnerName_LS#~#"
	}, o.LoginOption = {
		DoNotRemember: 0,
		RememberPWD: 1,
		NothingChecked: 3
	}, o.StringsVariantId = {
		Default: 0,
		SkypeMoveAlias: 1,
		CombinedSigninSignup: 2,
		CombinedSigninSignupDefaultTitle: 3,
		RemoteConnectLogin: 4,
		CombinedSigninSignupV2: 5,
		CombinedSigninSignupV2WelcomeTitle: 6
	}, o.AllowedIdentitiesType = {
		MsaOnly: 0,
		AadOnly: 1,
		Both: 2
	}, o.SessionIdp = {
		Aad: 0,
		Msa: 1
	}
}, function(e, o) {
	e.exports = {
		format: function(e) {
			for(var o = 1; o < arguments.length; o++) e = e.replace(new RegExp("\\{" + (o - 1) + "\\}", "g"), arguments[o]);
			return e
		}
	}
}]), window.__ConvergedLoginPaginatedStrings = !0;