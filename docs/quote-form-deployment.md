# Quote form deployment

The quote form submits to `/api/send-email`. The email integration is already part of the project and does not need to be recreated for a new deployment target.

Configure these environment variables on the final server:

```env
EMAIL_USER=formsintegration8@gmail.com
EMAIL_PASS=the-gmail-app-password
TO_EMAIL=print@layerscraft3d.com
```

Keep the real `.env` file or secret values outside Git. The final server must run the `/api/send-email` Node handler and expose it at the same `/api/send-email` path used by the frontend.
