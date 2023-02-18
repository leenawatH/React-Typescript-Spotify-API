import { useEffect } from "react";

const CLIENT_ID = "c9229c368b5f4a95bab7b83236096d97";
const CLIENT_SECRET = "53cd4795d5ee468a970982ffe1c371d7";

function Auth(props: { setAccessToken: (accessToken: string) => void }) {
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
      body: "grant_type=client_credentials",
    };

    fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then((res) => res.json())
      .then(data => {
        props.setAccessToken(data.access_token);
      })
  }, []);

  return null;
}

export default Auth;
