#!/usr/bin/env perl
use Mojolicious::Lite;

get '/' => 'index';

app->start;
