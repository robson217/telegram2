//Para executar a aplicação em produção, utilize as variaveis de ambiente e crie a seguinte URL.
curl "https://api.telegram.org/bot$TELEGRAM_API_TOKEN/setWebhook?url=$TELEGRAM_WEBHOOK_URL"
