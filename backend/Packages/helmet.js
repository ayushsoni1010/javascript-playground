// Helmet middleware is a toolkit that helps you to secure your Express apps by setting various HTTP headers.

const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());

// or we can use individual headers

app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());

// Prevent Click Jacking Attack
app.use(helmet.frameguard());

// Disable tech-stack from header
app.use(helmet.hidePoweredBy());

// Set strict transport security
app.use(helmet.hsts());

app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());

// Prevent Cross-site scripting attack
app.use(helmet.xssFilter());
