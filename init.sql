create database muhjah;
create schema muhjah;
set search_path to muhjah;
create table "user"
(
    id         serial
        constraint user_pk
            primary key,
    username   varchar(256)          not null,
    password   text                  not null,
    first_name varchar(256)          not null,
    last_name  varchar(256)          not null,
    email      varchar(512)          not null,
    role       text                  not null,
    is_active  boolean default false not null
);


