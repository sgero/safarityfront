drop table if exists asistente;
drop table if exists ticket;
drop table if exists evento_participante;
drop table if exists evento;
drop table if exists organizacion;
drop table if exists participante;
drop table if exists token;
drop table if exists usuario;





create table usuario(

                      id serial not null,
                      alias varchar(100) not null,
                      password varchar(100) not null,
                      activo bool default true,
                      rol int2 not null,
                      primary key (id)

);

create table participante(

                           id serial not null,
                           nombre varchar(100) not null,
                           apellidos varchar(100) not null,
                           direccion varchar(100) not null,
                           email varchar(100) not null,
                           dni varchar(9) not null,
                           telefono varchar(50) not null,
                           fecha_nacimiento date not null,
                           id_usuario int4 not null,
                           activo bool default true,
                           primary key (id),
                           constraint participante_usuario_fk foreign key (id_usuario) references usuario (id)
);


create table organizacion(

                           id serial not null,
                           nombre varchar(100) not null,
                           email varchar(100) not null,
                           cif varchar(9) not null,
                           telefono varchar(50) not null,
                           fecha_fundacion date not null,
                           info varchar(50) not null,
                           sitio_web varchar(50) not null,
                           logo varchar(50) not null,
                           id_usuario int4 not null,
                           activo bool default true,
                           primary key (id),
                           constraint organizacion_usuario_fk foreign key (id_usuario) references usuario (id)
);


create table evento(

                     id serial not null,
                     nombre varchar(100) not null,
                     fecha_inicio timestamp(6) not null,
                     fecha_fin timestamp(6) not null,
                     tipo_pago int2 not null,
                     tipo_evento int2 not null,
                     aforo integer not null,
                     direccion varchar(100) not null,
                     fecha_venta timestamp(6) not null,
                     fecha_lanzamiento timestamp(6) not null,
                     descripcion varchar(500) not null,
                     imagen varchar(500) not null,
                     id_organizacion int4 not null,
                     activo bool default true,
                     primary key (id),
                     constraint evento_organizacion_fk foreign key (id_organizacion) references organizacion (id)
);

create table ticket(

                     id serial not null,
                     es_disponible boolean not null,
                     dinero_aportado numeric(10,2) not null,
                     fecha_compra date not null,
                     id_participante int4 not null,
                     id_evento int4 not null,
                     activo bool default true,
                     primary key (id),
                     constraint ticket_participante_fk foreign key (id_participante) references participante (id),
                     constraint ticket_evento_fk foreign key (id_evento) references evento (id)
);

create table asistente(

                        id serial not null,
                        nombre varchar(100) not null,
                        apellidos varchar(100) not null,
                        direccion varchar(100) not null,
                        email varchar(100) not null,
                        dni varchar(9) not null,
                        telefono varchar(50) not null,
                        fecha_nacimiento date not null,
                        id_ticket int4 not null,
                        activo bool default true,
                        primary key (id),
                        constraint asistente_ticket_fk foreign key (id_ticket) references ticket (id)
);

create table evento_participante(

                                  id_evento int4 not null,
                                  id_participante int4 not null,
                                  constraint evento_evento_participante foreign key (id_evento) references evento(id),
                                  constraint participante_evento_participante foreign key (id_participante) references participante(id)

);


create table token(

                    id serial not null,
                    token varchar(800) not null,
                    fecha_expiracion timestamp(6) not null,
                    id_usuario int4 not null,
                    constraint token_usuario foreign key (id_usuario) references usuario(id)

);


select * from evento;
select * from usuario;
