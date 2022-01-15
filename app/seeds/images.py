from app.models import db, Image
# Adds a demo user, you can add other users here if you want
def seed_images():
    image1 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/c8f3983a-9c79-4083-ac8c-9800970bac75.jpg?im_w=720")
    image2 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/2090081b-7c89-4524-a5ec-f98068685a33.jpg?im_w=720")
    image3 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/8c259bb5-561d-4724-8076-90764f661fe5.jpg?im_w=720")
    image4 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/da7d5cd2-dc74-47ed-aaeb-59cf7414262e.jpg?im_w=720")
    image5 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/beb670d9-8a55-487e-a607-f3c9d761b330.jpg?im_w=720")
    image7 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/932a634d-af75-45b4-bbc6-af9771885279.jpg?im_w=720")
    image8 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/adfb517c-f209-45ea-8d1c-f4241f5eed4e.jpg?im_w=720")
    image9 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/36902a27-363a-43d8-a9a9-dd800f396294.jpg?im_w=720")
    image10 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/0a04cd5c-aeea-4338-818d-0a70a977a5b3.jpg?im_w=720")
    image11 = Image(getawayId = 1, url = "https://a0.muscache.com/im/pictures/d29ed4a9-678a-492c-8787-4e885c6c5bed.jpg?im_w=720")
    image12 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/0279e241-81c2-47e0-a031-e0a746a10573.jpeg?im_w=720")
    image13 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/e177354b-2c8e-4204-bb30-2e36e65efabb.jpeg?im_w=720")
    image14 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/ad6682e3-1e74-40b0-a46a-dd907c7b0533.jpeg?im_w=720")
    image15 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/be7d969f-ad56-4e05-aa89-d45b7592e921.jpeg?im_w=720")
    image16 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/bf5ecec2-4a52-43cd-850e-14cb690da9cd.jpeg?im_w=720")
    image18 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/47efb9cd-4351-4f8f-afdb-667176925161.jpeg?im_w=720")
    image19 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/06ea3de7-3d89-4c3c-af1e-0a2e87f7a143.jpeg?im_w=720")
    image20 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/f78f25be-a965-44a7-b6fd-568f1f42ae70.jpeg?im_w=720")
    image21 = Image(getawayId = 2, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-20602855/original/c24e46c5-3f04-4957-b7e6-d5e38cdbca95.jpeg?im_w=720")
    image22 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/6eb1704f-cc30-4daf-a3fd-e89cc44b71d1.jpg?im_w=720")
    image23 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/72582834-d5e2-4f4f-8c5b-d9cd94425608.jpg?im_w=720")
    image24 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/3993d1e3-e4dc-42ad-94ad-a8421faf734a.jpg?im_w=720")
    image25 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/803136e6-6a04-4ce1-8b7e-e24697c56699.jpg?im_w=720")
    image26 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/3df7cc6f-d55e-4134-a47d-8672ea7ed860.jpg?im_w=720")
    image28 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/bebf22ee-cfec-413d-a9fd-ff65a95100eb.jpg?im_w=720")
    image29 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/b9739b4a-7b27-43e3-b531-ed3cf8dc2aaa.jpg?im_w=720")
    image30 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/a1ee6007-8900-4cea-8bfa-ab95ce578f48.jpg?im_w=720")
    image31 = Image(getawayId = 3, url = "https://a0.muscache.com/im/pictures/a634358b-18d7-4a98-a753-601d801d2cc4.jpg?im_w=720")
    image32 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/7ab68c4a-1693-49a0-874a-791c9282356e.jpg?im_w=720")
    image33 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/2e45f61d-aff3-4fe7-b2e6-8fbf37a2f932.jpg?im_w=720")
    image34 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/6a57df04-f643-440d-9910-a7347c59cbeb.jpg?im_w=720")
    image35 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/eb7c3efa-7422-4cfe-aa05-9d925b3a54fd.jpg?im_w=720")
    image36 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/05684bd1-f210-48b7-bc1e-a21108fa8bfc.jpg?im_w=720")

    image41 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/f544930a-badf-4db3-aa0a-8033ec4b6e24.jpg?im_w=720")
    image42 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/c2d99b0f-6a02-4ad4-a5fa-b39bcd54313c.jpg?im_w=720")
    image43 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/2095c2c8-58f0-455c-a240-9a23a89e319d.jpg?im_w=720")
    image44 = Image(getawayId = 4, url = "https://a0.muscache.com/im/pictures/cbb04d82-48ae-4cee-b1d4-cea35028dfdd.jpg?im_w=720")
    image45 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/318286db-65b2-4322-8849-8321818878df.jpeg?im_w=720")
    image46 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/7952b19f-36bb-47c7-8b18-735db65aa6fc.jpeg?im_w=720")
    image47 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/354bb0f3-8208-4293-9292-bd4349172166.jpeg?im_w=720")
    image48 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/38711209-ab04-48d7-a1b4-af9002fa14eb.jpeg?im_w=720")
    image49 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/cda53f09-ab54-43ca-b3a7-6f005b0b1531.jpeg?im_w=720")
    image51 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/261e6b24-be88-4fe0-b662-f67005bcc546.jpeg?im_w=720")
    image52 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/b6c81827-ab1e-4766-95f0-f8115cc411b7.jpeg?im_w=720")
    image53 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/537d1ee8-6f9c-4a89-9225-ebd42485e210.jpeg?im_w=720")
    image54 = Image(getawayId = 5, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52941663/original/d8c57df0-ef5c-4036-957c-4a3c77a46ed7.jpeg?im_w=720")
    image55 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/2387be45-8f69-4f44-a2a4-ae4447b5a87e.jpg?im_w=720")
    image56 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/9468d526-e3bd-441b-9e75-f8f400f07bdb.jpg?im_w=720")
    image57 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/e05358cc-8c1d-4ba3-a867-a5d7202174fa.jpg?im_w=720")
    image58 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/0a466e98-49f0-44fd-bb42-13fcbe7a2e78.jpg?im_w=720")
    image59 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/5560ff63-9440-45f0-8c20-e1b78fedda7c.jpg?im_w=720")
    image61 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/737722e8-39ef-4cc5-b05f-552ff3f91914.jpg?im_w=720")
    image62 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/10d78508-d5f9-4000-a3c5-984961e83e91.jpg?im_w=720")
    image63 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/74298a22-ae62-4b3f-a46f-c09447270451.jpg?im_w=720")
    image64 = Image(getawayId = 6, url = "https://a0.muscache.com/im/pictures/004cb8f9-dbb7-4626-a3fc-c5997cc26e9e.jpg?im_w=720")
    image65 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/eb08ddc6-54d0-4bf7-aca9-4a0e4fbc15e5.jpg?im_w=720")
    image66 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/0a9b3b9a-86b4-4fc5-b10e-f1248e8916c1.jpg?im_w=720")
    image67 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/8229a532-9613-4b19-b560-3f576c2b666e.jpg?im_w=720")
    image68 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/71b12dee-8c6b-4c65-b7d8-db41171f9e63.jpg?im_w=720")
    image69 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/4aa87816-bf49-4a8a-ad08-eaa5f05e031f.jpg?im_w=720")
    image76 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/49dbf706-9959-4382-94aa-590a3ad3d454.jpg?im_w=720")
    image77 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/0ba4d779-1ac4-41c9-a41c-0f1e33cab221.jpg?im_w=720")
    image78 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/85795b92-a2bf-4bcd-843b-042f993620dc.jpg?im_w=720")
    image79 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/f121fd57-fa79-4a73-8200-41ad70f9d1af.jpg?im_w=720")
    image80 = Image(getawayId = 7, url = "https://a0.muscache.com/im/pictures/736190d8-b127-4370-bf5c-77aeebe7f5e3.jpg?im_w=720")
    image81 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/b93dc395-98ba-45a9-a7d6-492c625c69e5.jpg?im_w=720")
    image82 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/29dc0701-0eea-4ea4-a52d-2f7f09ed324b.jpg?im_w=720")
    image83 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/b584c44e-3999-4163-904e-e68189b68769.jpg?im_w=720")
    image84 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/d1488bbf-038a-4797-a988-8373a6a57907.jpg?im_w=720")
    image85 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/8c7a9fd8-5912-4844-b452-f555b4ec50eb.jpg?im_w=720")
    image87 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/84c055a1-eae5-4468-adfb-2f82310ff785.jpg?im_w=720")
    image88 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/3f844dfa-7bad-4286-9944-d151bb3cc7b8.jpg?im_w=720")
    image89 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/d3310fd6-8ff0-4f3b-9d7c-ab9dbd9830ba.jpg?im_w=720")
    image90 = Image(getawayId = 8, url = "https://a0.muscache.com/im/pictures/a26d5199-5b39-4c0c-9e45-ec0cd0eb871f.jpg?im_w=720")
    image91 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/402c9013-3392-4230-b69e-7e5245e26211.jpg?im_w=720")
    image92 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/824727bb-cba7-4a99-b995-5201ba36e00c.jpg?im_w=720")
    image93 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/aec06149-02ea-4d36-956b-6253530431d4.jpg?im_w=720")
    image94 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/c6424f55-1f71-4513-87aa-3841226c0328.jpg?im_w=720")
    image95 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/91643417-1d46-485d-b6f4-85e120cfa0bd.jpg?im_w=720")
    image97 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/9ef70c3c-bbca-4eb9-9a69-c0d7eb9c3e12.jpg?im_w=720")
    image98 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/9b060457-c5a9-485c-9ce1-f9f47cadb29d.jpg?im_w=720")
    image99 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/a6c837a6-2a02-4f4c-9a2f-f2cee967c1cc.jpg?im_w=720")
    image100 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/2fc27d0c-1f70-4248-9fe1-ea1f2d1d6622.jpg?im_w=720")
    image101 = Image(getawayId = 9, url = "https://a0.muscache.com/im/pictures/4d0e245b-b693-44df-88a5-1c241951271c.jpg?im_w=720")
    image102 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/37e49d01-a091-46f0-867b-d5ec0ec7292c.jpg?im_w=720")
    image103 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/dc07cf36-62d9-4000-abad-838f3e9ddbc8.jpg?im_w=720")
    image104 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/269fba90-73fb-4e61-b693-de01f8fa2ddd.jpg?im_w=720")
    image105 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/48c670ad-4773-4060-8fd5-434d830bb91e.jpg?im_w=720")
    image106 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/32fad065-d572-42de-a27e-c488dc8babb7.jpg?im_w=720")
    image108 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/9347b0d7-297d-4991-a13b-8d1afa60b959.jpg?im_w=720")
    image109 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/ec21259f-6a0a-486f-b321-d86e19e32cca.jpg?im_w=720")
    image110 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/8cd22b60-eb94-4634-ab81-3aad49915097.jpg?im_w=720")
    image111 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/83183ddb-2f46-4ed5-b88b-e0b7f6980b1a.jpg?im_w=720")
    image112 = Image(getawayId = 10, url = "https://a0.muscache.com/im/pictures/ad788588-f220-4bf9-9bb1-2c1e4efa8f2d.jpg?im_w=720")
    image113 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/4832b42f-4172-4342-a976-e0c5d8a79342.jpg?im_w=720")
    image114 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/7ceff96a-f0c6-4e20-aea8-d74f977e3b0f.jpg?im_w=720")
    image115 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/fc76a8ef-f1e7-4f09-8b39-6c8d5140878a.jpg?im_w=720")
    image116 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/52452b91-afaa-4ba9-bc3c-1e68f2b11db1.jpg?im_w=720")
    image117 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/116b0850-1f89-4e72-9534-c8f84936b4b4.jpg?im_w=720")
    image119 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/9b0d810a-6a26-4080-9a21-cd2cde7f246e.jpg?im_w=720")
    image120 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/20c13249-c20c-4cee-ae92-a4cb0b328302.jpg?im_w=720")
    image121 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/015ad26e-7560-45f0-bc26-bc3fe062ccce.jpg?im_w=720")
    image122 = Image(getawayId = 11, url = "https://a0.muscache.com/im/pictures/94429db7-5c94-40ad-8dd2-71255fd8c90d.jpg?im_w=720")
    image123 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/b08296d1-0989-425b-9c34-8f3b55a5c02b.jpg?im_w=720")
    image124 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/eb331533-4491-4234-9033-1e13396c395a.jpg?im_w=720")
    image125 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/miso/Hosting-50247643/original/339e4090-847d-4960-bf76-172e72fd55db.jpeg?im_w=720")
    image126 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/476a1527-4c17-4855-8f33-8214cc45209c.jpg?im_w=720")
    image127 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/06f6e5ac-403d-4317-b30a-4a39eb34081f.jpg?im_w=720")
    image129 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/038f14ca-7062-4ccc-9b30-8ba83030219d.jpg?im_w=720")
    image130 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/897f26c8-4809-4c3b-b8c9-b28c60dcb2c7.jpg?im_w=720")
    image131 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/e6eac881-9ae6-4999-9613-16498a2d2a8c.jpg?im_w=720")
    image132 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/ada98de3-35c2-4378-802c-1f27c7ae6e40.jpg?im_w=720")
    image133 = Image(getawayId = 12, url = "https://a0.muscache.com/im/pictures/ad3517c5-cbc8-4285-bd2b-2c5544173508.jpg?im_w=720")
    image134 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/80d476fe-deac-4e5c-ab47-6340fc3acf8f.jpg?im_w=720")
    image135 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/miso/Hosting-42861527/original/2377530d-d202-4840-bd1c-8036800ed7b6.jpeg?im_w=720")
    image136 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/3d1d5005-cdeb-49e1-9fd1-67ba02b91b31.jpg?im_w=720")
    image137 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/ff0a5c99-5790-4804-a704-8df4543a2ab6.jpg?im_w=720")
    image138 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/fc393915-15a2-4718-990b-ce219030a8c5.jpg?im_w=720")
    image141 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/30447a51-442f-447b-aeff-2fe07ba413d7.jpg?im_w=720")
    image142 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/ad6d1d55-1a49-4e0b-86f3-cd22259a5729.jpg?im_w=720")
    image143 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/4914760f-17ec-49a4-a3c3-46ae63a5a652.jpg?im_w=720")
    image144 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/fe0f62d7-d11c-4ee0-b14c-23164004182b.jpg?im_w=720")
    image145 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/6ca5cab5-c41d-4ec4-a7fd-c7c2e3be2ec9.jpg?im_w=720")
    image146 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/c758c81e-fa6b-4726-a1c7-afcef4a37fd2.jpg?im_w=720")
    image147 = Image(getawayId = 13, url = "https://a0.muscache.com/im/pictures/8ba3ae54-eb7b-4f6d-98da-38809daa88ea.jpg?im_w=720")
    image148 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/82f978a6-fecf-4a57-ac15-5015dec72d41.jpeg?im_w=720")
    image149 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/a6642fca-0532-4a27-9671-8e0d8122f9d2.jpeg?im_w=720")
    image150 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/40205157-1b4f-4ecb-bc51-f221d5cbf185.jpeg?im_w=720")
    image151 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/ceb0ccd5-2c31-49f7-8452-aea420401c9e.jpeg?im_w=720")
    image152 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/1538e6c9-f81f-41d1-be7d-67fb18aab65b.jpeg?im_w=720")
    image155 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/b66c91c7-ad98-46cc-9253-1c1cbb25e941.jpeg?im_w=720")
    image156 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/cec4a3ab-d628-4c4b-b082-2a0c6817b62e.jpeg?im_w=720")
    image157 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/f0aa5202-3c16-400a-89bc-00ac737be425.jpeg?im_w=720")
    image158 = Image(getawayId = 14, url = "https://a0.muscache.com/im/pictures/prohost-api/Hosting-36133910/original/b887b55d-a6ff-412d-b1ec-a4a8410a1be4.jpeg?im_w=720")
    image159 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/eec93f8e-349b-48e2-830f-fa3fb27c24b6.jpg?im_w=1200")
    image160 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/eec93f8e-349b-48e2-830f-fa3fb27c24b6.jpg?im_w=720")
    image161 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/8089e06f-4940-4ab9-b798-fd1f4e9cd657.jpg?im_w=720")
    image162 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/a4f8fecf-b9c2-4567-b1f7-6d62d17883e0.jpg?im_w=720")
    image163 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/df191397-9607-47bc-ae1f-0c052131efc6.jpg?im_w=720")
    image164 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/2508d0ea-6da3-421a-965f-d3e101a10c43.jpg?im_w=720")
    image170 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/1a8df4c0-c0fc-4ec4-a8d5-22c69f846776.jpg?im_w=720")
    image171 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/d4260d28-fbdb-4da3-b2cd-512c687ee7d2.jpg?im_w=720")
    image172 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/b79ea2d9-e063-4fb3-87b4-2980c2a8c479.jpg?im_w=720")
    image173 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/0681c207-b541-4afd-860a-d314d0ab3413.jpg?im_w=720")
    image174 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/e21de9b7-2d52-476e-aa22-4dea642453f5.jpg?im_w=720")
    image175 = Image(getawayId = 15, url = "https://a0.muscache.com/im/pictures/7ef35381-df95-4534-8e35-6be188db4124.jpg?im_w=720")
    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)
    db.session.add(image41)
    db.session.add(image42)
    db.session.add(image43)
    db.session.add(image44)
    db.session.add(image45)
    db.session.add(image46)
    db.session.add(image47)
    db.session.add(image48)
    db.session.add(image49)
    db.session.add(image51)
    db.session.add(image52)
    db.session.add(image53)
    db.session.add(image54)
    db.session.add(image55)
    db.session.add(image56)
    db.session.add(image57)
    db.session.add(image58)
    db.session.add(image59)
    db.session.add(image61)
    db.session.add(image62)
    db.session.add(image63)
    db.session.add(image64)
    db.session.add(image65)
    db.session.add(image66)
    db.session.add(image67)
    db.session.add(image68)
    db.session.add(image69)
    db.session.add(image76)
    db.session.add(image77)
    db.session.add(image78)
    db.session.add(image79)
    db.session.add(image80)
    db.session.add(image81)
    db.session.add(image82)
    db.session.add(image83)
    db.session.add(image84)
    db.session.add(image85)
    db.session.add(image87)
    db.session.add(image88)
    db.session.add(image89)
    db.session.add(image90)
    db.session.add(image91)
    db.session.add(image92)
    db.session.add(image93)
    db.session.add(image94)
    db.session.add(image95)
    db.session.add(image97)
    db.session.add(image98)
    db.session.add(image99)
    db.session.add(image100)
    db.session.add(image101)
    db.session.add(image102)
    db.session.add(image103)
    db.session.add(image104)
    db.session.add(image105)
    db.session.add(image106)
    db.session.add(image108)
    db.session.add(image109)
    db.session.add(image110)
    db.session.add(image111)
    db.session.add(image112)
    db.session.add(image113)
    db.session.add(image114)
    db.session.add(image115)
    db.session.add(image116)
    db.session.add(image117)
    db.session.add(image119)
    db.session.add(image120)
    db.session.add(image121)
    db.session.add(image122)
    db.session.add(image123)
    db.session.add(image124)
    db.session.add(image125)
    db.session.add(image126)
    db.session.add(image127)
    db.session.add(image129)
    db.session.add(image130)
    db.session.add(image131)
    db.session.add(image132)
    db.session.add(image133)
    db.session.add(image134)
    db.session.add(image135)
    db.session.add(image136)
    db.session.add(image137)
    db.session.add(image138)
    db.session.add(image141)
    db.session.add(image142)
    db.session.add(image143)
    db.session.add(image144)
    db.session.add(image145)
    db.session.add(image146)
    db.session.add(image147)
    db.session.add(image148)
    db.session.add(image149)
    db.session.add(image150)
    db.session.add(image151)
    db.session.add(image152)
    db.session.add(image155)
    db.session.add(image156)
    db.session.add(image157)
    db.session.add(image158)
    db.session.add(image159)
    db.session.add(image160)
    db.session.add(image161)
    db.session.add(image162)
    db.session.add(image163)
    db.session.add(image164)
    db.session.add(image170)
    db.session.add(image171)
    db.session.add(image172)
    db.session.add(image173)
    db.session.add(image174)
    db.session.add(image175)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
