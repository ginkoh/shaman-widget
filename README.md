# shaman-widget



## Tips
- Checar XHR's e Websocket messages do Intercom (weblink) e do User Engage (hotelflow);



## **Requests**
- Widget deve fazer nenhum request ao ser fechado e aberto novamente;



## **WebSocket**
- Os websockets tem de serem reconectáveis:
`https://github.com/websockets/ws/wiki/Websocket-client-implementation-for-auto-reconnect`;

- Os websockets tem de ter fallback para long pooling (o server tem que estar preparado para isso)?;

- Os consumers do django cuidam da parte dos dados;

- O `id` do websocket é manuseado pela lista de `websocket_urlpatterns` no arquivo de routing. O `room_id` é enviado 
pela URL na hora em que os fronts fazem request para um websocket novo/existente.

```Python
(re_path(r'ws/chat/(?P<room_id>\w+)/$', consumers.ChatConsumer))
```



## **Application Experience Roadmap**
`$example = hotelflow|website|any_other_system`
`$last_messages_count = 10`

- Cliente do sistema ($example) abre o sistema ($example);

- O widget é carregado;

- O front dispara uma requisição de um novo websocket, com o `room_id aleatório ou baseado na sessão do usuário?`;

- O server checa se a chamada para esse novo websocket é válida (room_id válido (como validar?));

- Usuário clica no widget;

- O widget expande e:
    - Mostra o nome do $example;

    - Mostra a descrição;

    - Mostra os agents;

    - Chama o endpoint de `conversations`. Esse endpoint entrega todos os `chat_conversations` em que o usuário (regis
    trado no $example) está atrelado. No widget, uma lista com o preview de todos esses `chat_conversations` é mostrada. 
    Pra cada um deles, é feito um fetch (/chat/conversation_id/messages) da última mensagem de cada, que é a que será 
    mostrada no preview (ou é feito um fetch de $last_messages_count mensagens, que possibilita um acesso mais rápido a 
    cada chat individual ao abri-lo);

    - Mostra um botão para o usuário poder iniciar uma nova conversa com um operator escolhido aleatóriamente;

    - Ao clicar em uma conversa, é feito fetch das $last_messages_count e mostradas na conversa. A conversa dá um editor
    de textos para o usuário escrever
