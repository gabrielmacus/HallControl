require('dotenv').config()
import * as express from 'express';
import { AddressInfo } from "net";
import * as path from 'path';
import { Voicemeeter } from 'voicemeeter-connector';
import usePresetRouter from './modules/presets/preset.router';
import { Server } from "socket.io";
import cors = require('cors');

const debug = require('debug')('my express app');
const app = express();

app.use(cors());
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

//Presets
app.use(usePresetRouter());


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err[ 'status' ] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
        res.status(err[ 'status' ] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


/*
const server = http.Server(app);
server.listen(process.env.PORT || 3000);
*/


app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
    
    debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});


/*
//Websocket server
const io = new Server(server, {
    cors: {
        //TODO: Usar .env
        origin:'*'
    }
});
io.on("connection", (socket) => {
    debug("User connected");
});*/