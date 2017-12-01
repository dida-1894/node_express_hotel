home

banner_table
    id                              int
    bg_img_src                      varchar(256)
room_table
    id                              int
    img_src                         varchar(256)
    title                           varchar(32)
    introduce                       varchar(128)
    herf                            varchar(256)
guests_table
    id                              int
    guest_pic_src                   varchar(256)
    comment                         varchar(512)
    avatar_pic_src                  varchar(256)
-------------------------------------------------------------------------------------------------------------------------
about

banner_table
    id                              int
    bg_img_src                      varchar(256)
    summary                         varchar(512)
(repeat)room_table
    id                              int
    img_src                         varchar(256)
    title                           varchar(32)
    introduce                       varchar(128)
    herf                            varchar(256)
our_team
    id                              int
    avatar_pic_src                  varchar(256)
    name                            varchar(32)
    facebook                        varchar(128)
    google+                         varchar(128)
    twitter                         varchar(128)
rates_booking
-------------------------------------------------------------------------------------------------------------------------
gallery//博文表

teletext
    id                              int
    bg_img_src                      varchar(256)
    like                            int
-------------------------------------------------------------------------------------------------------------------------
contact
    id                              int
    name                            varchar(32)      
    email                           varchar(64)
    phone                           varchar(12)
    message                         text
-------------------------------------------------------------------------------------------------------------------------
single
    id                              int
    title                           varchar(32)
    banner_src                      varchar(300)                          
    artical                         text
