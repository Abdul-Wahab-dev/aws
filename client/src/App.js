import "./App.css";

function App() {
  const handleSignIn = async () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=312168472566-p8f355jiihmkp7mthovtbq2eqdvhic4b.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fgoogle-login.auth.us-east-1.amazoncognito.com%2Foauth2%2Fidpresponse&scope=email%20profile&response_type=code&state=H4sIAAAAAAAAAE2QW1OjQBBG_8s8h8hlAOHNC2gSiWaDm6hlpWZgYAhzgcxE3Vj737fXB8u3PtWnu_rrT0RQio7GYcRYx9ut2GmdnHh7jyaIQudG61YwgArAE1Ho4fBgsaA65Kqv1dsYBq6iINQgcGuH9OxM6IoIro1NA9d1AdtOgcHAsLpn_-vm5-4WpS-ISdIJAD0w1dVQDFwrhl4nqAe3v5NX_ny81U_NWm0TmUdj25dLs9q992W2fJR8MSuNv92d_EBcOvOHrb39SA55bkd2FBciK4aHm7V9L8nTGre5zmjQXUejd8-rOOGj2hzz2ZDHiarjPR-zy7tl82vDDdmsDrs-fl4UzR5nTiLGiOoIP8tqGxf7P_7sozCPRS33pqeL33OjirKA0wVc3H6lc77CT8nR8un3l6dEkpNWlW5VZ_W00hJmJEq96DwMvcT3Q0iP0oYIwyboAMvOo9oNMMVO0xDiYBL7TkJrQIJpgHHjwRz6-w-BcPKYzQEAAA.H4sIAAAAAAAAAJvWu-HVplmzee01_8Wwfd-jYne5cfZ0LzMTFql3nL0zbLIBUD_LICAAAAA.4&service=lso&o2v=2&flowName=GeneralOAuthFlow";
  };

  return (
    <div className="App">
      <button type="button" onClick={handleSignIn}>
        Google sigin
      </button>
    </div>
  );
}
export default App;
