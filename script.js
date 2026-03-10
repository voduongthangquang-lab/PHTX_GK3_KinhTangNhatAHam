const quizData = [
    {
        question: "Câu 1: Trong phẩm Tựa, Tôn giả A-nan đã phó chúc Khế kinh Tăng Nhất A-hàm cho vị Tôn giả nào?",
        options: [
            "Tôn giả Ca-diếp",
            "Tôn giả Mục-kiền-liên",
            "Tôn giả Ưu-đa-la",
            "Tôn giả Xá-lợi-phất"
        ],
        correctAnswer: 2,
        explanation: "Trong văn bản phẩm Tựa, người được phó chúc là Tôn giả Ưu-đa-la. Hậu quả của việc xem thường kinh được xác định cụ thể là "đọa lạc xuống hàng phàm phu" (mất đi cơ hội giải thoát), chứ không nói chung chung là đọa địa ngục hay mất phước."
    },
    {
        question: "Câu 2: Lời cảnh báo của Tôn giả A-nan đối với người xem thường Khế kinh Tăng Nhất A-hàm là gì?",
        options: [
            "Sẽ bị đọa vào địa ngục vô gián.",
            "Liền bị đọa lạc xuống hàng phàm phu.",
            "Mất hết phước báu trong hiện tại.",
            "Đời đời sinh ra bần cùng, ngu si."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 3: Theo Tôn giả A-nan, Tăng Nhất A-hàm có vị thế như thế nào đối với các pháp?",
        options: [
            "Là giáo pháp chuyên về thiền định và trí tuệ.",
            "Là giáo pháp chỉ dành cho bậc xuất gia thọ cụ túc giới.",
            "Là giáo pháp sanh ra ba mươi bảy đạo phẩm và các pháp đều từ đây sanh ra.",
            "Là tập hợp các giới luật căn bản của chư Phật."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 4: Bài kệ nào được Tôn giả A-nan viện dẫn để chứng minh chỉ cần một bài kệ trong Tăng Nhất A-hàm cũng có đủ 37 đạo phẩm?",
        options: [
            "Các hành vô thường / Là pháp sanh diệt.",
            "Tâm dẫn đầu các pháp / Tâm làm chủ, tâm tạo.",
            "Không làm mọi điều ác / Thành tựu các hạnh lành.",
            "Chớ làm các việc ác / Siêng tu các hạnh lành / Giữ tâm mình thanh tịnh / Là lời chư Phật dạy."
        ],
        correctAnswer: 3
    },
    {
        question: "Câu 5: Khi Tôn giả Ca-diếp hỏi vì sao chỉ phó chúc Tăng Nhất A-hàm mà không truyền hết thảy các pháp, Tôn giả A-nan đáp thế nào?",
        options: [
            "Vì Tăng Nhất A-hàm là bộ kinh tóm tắt dễ nhớ nhất.",
            "Vì Tăng nhất A-hàm tức là các pháp, vốn chỉ là một mà không có hai.",
            "Vì các kinh khác đã được phó chúc cho các đại đệ tử khác.",
            "Vì chúng sanh thời mạt pháp chỉ có thể thọ trì bộ kinh này."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 6: Trong Kinh Công Đức Niệm Phật, hành giả \"niệm Phật\" bằng cách nào?",
        options: [
            "Chuyên tâm trì niệm danh hiệu Đức Phật A Di Đà.",
            "Lạy Phật mỗi ngày và tụng đọc kinh điển.",
            "Kiết-già tĩnh tọa, nhất tâm quán tưởng mười lực, bốn vô sở úy của Như Lai.",
            "Xây dựng hình tượng Phật và cúng dường hoa hương."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 7: Trong Kinh Công Đức Niệm Pháp, đặc tính cốt lõi của Chánh pháp mà hành giả cần quán niệm là gì?",
        options: [
            "Là pháp vi diệu nhiệm mầu, thâm sâu khó hiểu.",
            "Là pháp đưa đến vô dục, xa lìa trói buộc và ngăn che.",
            "Là pháp mang lại phước báu nhân thiên tức thì.",
            "Là pháp tổng hợp toàn bộ triết lý thế gian."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 8: Đối tượng Thánh chúng trong Kinh Công Đức Niệm Tăng KHÔNG bao gồm đặc tính nào dưới đây?",
        options: [
            "Thành tựu giới, định, tuệ, giải thoát, giải thoát tri kiến.",
            "Gồm bốn đôi tám bậc.",
            "Là ruộng phước của thế gian.",
            "Là những vị đã dứt sạch nhân duyên sinh tử, hiện thân Phật."
        ],
        correctAnswer: 3
    },
    {
        question: "Câu 9: Trong Kinh Công Đức Niệm Tịch Lặng, pháp tu này yêu cầu hành giả phải làm gì?",
        options: [
            "Buộc niệm một chỗ, dứt trừ nghĩ tưởng, tâm không vọng động.",
            "Trì chú liên tục trong im lặng.",
            "Quán sát sự vô thường của thân thể.",
            "Tách biệt hoàn toàn khỏi đời sống xã hội."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 10: Trong Kinh Ưu-bà-di Dạy Con Trai, người mẹ khuyên con nếu sống tại gia thì noi theo hình mẫu nào?",
        options: [
            "Trưởng giả Cấp Cô Độc và Lộc Tử Mẫu.",
            "Trưởng giả Chất-đa và đồng tử Tượng.",
            "Tỳ-kheo Xá-lợi-phất và Tỳ-kheo Mục-kiền-liên.",
            "Trưởng giả Duy-ma-cật và đồng tử Thiện Tài."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 11: Nếu người con gái chọn con đường xuất gia (Kinh Ưu-bà-di Dạy Con Gái), người mẹ khuyên nên noi gương ai?",
        options: [
            "Tỳ-kheo-ni Liên Hoa Sắc và Tỳ-kheo-ni Đại Ái Đạo.",
            "Ưu-bà-di Câu-thù-đa-la và Nan-đà Mẫu.",
            "Tỳ-kheo-ni Sấm-ma và Tỳ-kheo-ni Ưu-bát Hoa Sắc.",
            "Tỳ-kheo-ni Gia-du-đà-la và Tỳ-kheo-ni Sấm-ma."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 12: Trong Kinh Đạo Phẩm, sự xuất hiện của ai ở đời liền khiến ba mươi bảy đạo phẩm xuất hiện?",
        options: [
            "Chuyển Luân Thánh Vương.",
            "Bậc A-la-hán Đẳng Chánh Giác (Như Lai).",
            "Bồ Tát Nhất Sanh Bổ Xứ.",
            "Các vị Thanh Văn đại đệ tử."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 13: Thuật ngữ chính xác được dùng để chỉ 37 đạo phẩm trong Kinh Đạo Phẩm của Tăng Nhất A-hàm là gì?",
        options: [
            "4 niệm xứ, 4 chánh cần, 4 như ý túc, 5 căn, 5 lực, 7 giác chi, 8 chánh đạo.",
            "4 niệm xứ, 4 chánh đoạn, 4 thần túc, 5 căn, 5 lực, 7 giác chi, 8 Thánh đạo.",
            "4 niệm xứ, 4 chánh đoạn, 4 như ý túc, 5 căn, 5 lực, 7 bồ-đề phần, 8 Thánh đạo.",
            "4 chánh niệm, 4 chánh đoạn, 4 thần túc, 5 căn, 5 lực, 7 giác chi, 8 Thánh đạo."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 14: Theo Kinh Mất Hẳn, nền tảng cốt lõi để giữ cho 37 đạo phẩm không bị diệt tận khi Như Lai không còn ở đời là gì?",
        options: [
            "Phải luôn cung kính chư Phật.",
            "Phải xây dựng nhiều chùa tháp.",
            "Phải kết tập kinh điển.",
            "Phải truyền bá pháp môn niệm Phật."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 15: Đối với phàm phu khó quán sát tâm ý (Kinh Tâm Nhanh Nhạy), Đức Phật dạy giải pháp thực tiễn là gì?",
        options: [
            "Buông xả mọi ý niệm.",
            "Luôn hàng phục tâm ý, khiến hướng theo đường lành.",
            "Tìm nơi thanh vắng để ép xác tu khổ hạnh.",
            "Mặc kệ tâm ý vì nó vốn vô thường."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 16: Hình ảnh nào được dùng để ví dụ cho sự nhanh nhạy, niệm trước và niệm sau không giống nhau của tâm (Kinh Tâm Vô Thường)?",
        options: [
            "Dòng thác chảy xiết.",
            "Bóng chớp trên trời.",
            "Khỉ vượn chuyền cành.",
            "Ngựa hoang chạy rông."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 17: Kinh Đọa Lạc chỉ ra nguyên nhân trực tiếp nhất khiến một người đọa địa ngục nhanh như khoảnh khắc co duỗi tay lúc qua đời là gì?",
        options: [
            "Khởi tâm tham ái tài sản.",
            "Ôm tâm tà kiến đoạn diệt.",
            "Ôm tâm sân hận.",
            "Tiếc nuối người thân."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 18: Ngược lại, điều kiện để được sanh lên cõi trời ngay tức khắc lúc qua đời (Kinh Sanh Thiên) là gì?",
        options: [
            "Lúc khởi tâm thiện diệu.",
            "Lúc dứt sạch hoàn toàn lậu hoặc.",
            "Lúc đang tụng đọc kinh điển.",
            "Lúc đang làm phước bố thí."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 19: Khi tâm loạn tưởng, để các tưởng dục, sân, thụy miên, trạo cử, nghi chưa sinh thì không sinh, đã sinh bị trừ diệt (Kinh Dục Tưởng), pháp tu ĐẶC HIỆU là gì?",
        options: [
            "Phải luôn chánh niệm.",
            "Phải luôn chuyên tâm quán tưởng bất tịnh.",
            "Phải luôn tu tập từ bi quán.",
            "Phải luôn thực hành sổ tức quán (đếm hơi thở)."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 20: Định nghĩa của \"Hạnh không buông lung\" trong kinh Không Buông Lung là gì?",
        options: [
            "Không ngủ quá nhiều.",
            "Siêng năng làm việc thiện.",
            "Đó là phòng hộ tâm.",
            "Giữ gìn giới luật nghiêm ngặt."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 21: Trong kinh Không Buông Bỏ Thiện Pháp, \"Thiện pháp\" tối thắng được Đức Phật chỉ định là gì?",
        options: [
            "Mười thiện nghiệp.",
            "Bố thí, trì giới, nhẫn nhục.",
            "Tám đạo phẩm của bậc Hiền thánh (Bát chánh đạo).",
            "Lục độ Ba-la-mật."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 22: Theo Kinh Tạo Phước, ranh giới giữa Phước và Vô phước được định nghĩa dựa trên yếu tố nào?",
        options: [
            "Số lượng tài sản cúng dường.",
            "Báo ứng thọ lạc (phước) và Nguồn gốc các khổ (vô phước).",
            "Sự khen ngợi hay chê bai của người đời.",
            "Động cơ khi làm việc thiện."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 23: Bài kệ trong Kinh Ma Ba-tuần đúc kết điều gì về Phước?",
        options: [
            "Phước báu vốn là vô thường, không nên chấp trước.",
            "Có phước an lạc, không phước khổ sầu; đời này đời sau nhờ phước an lạc.",
            "Phước báu cõi trời cũng không bằng phước xuất gia.",
            "Chỉ cần vô ngã là có toàn bộ phước."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 24: Chìa khóa quyết định việc tu hành một pháp không thể phá trừ đường dữ hay đến được nẻo thiện (Kinh Đường Dữ) là gì?",
        options: [
            "Trí tuệ thấu suốt.",
            "Định lực kiên cố.",
            "Tâm có niềm tin tha thiết hay không.",
            "Sự dũng mãnh tinh tấn."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 25: Cũng trong Kinh Đường Dữ, pháp tu duy nhất để đến được Niết-bàn là gì?",
        options: [
            "Luôn giữ chánh niệm.",
            "Luôn quán vô thường.",
            "Luôn tu khổ hạnh.",
            "Luôn bố thí cúng dường."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 26: Tôn chỉ của phẩm Nhất Nhập Đạo (Kinh Niệm Xứ) - lối vào đạo chứng đắc Niết bàn là gì?",
        options: [
            "Diệt trừ tham sân si và tu tập Bát chánh đạo.",
            "Diệt trừ mười kiết sử và chứng Tứ thánh quả.",
            "Diệt trừ năm sự ngăn che (Ngũ triền cái) và tu tập bốn niệm xứ.",
            "Đoạn diệt vô minh và hành thâm Bát nhã."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 27: Trong Kinh Niệm Xứ, \"Một lối\" và \"Đạo\" được định nghĩa cụ thể là gì?",
        options: [
            "Lối là chánh niệm; Đạo là Trung đạo.",
            "Lối là tâm chuyên nhất; Đạo là tám đạo phẩm của Hiền thánh.",
            "Lối là thiền định; Đạo là trí tuệ.",
            "Lối là xuất gia; Đạo là Tứ diệu đế."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 28: Nhóm phiền não nào tương ứng với \"năm sự ngăn che\" trong Kinh Niệm Xứ?",
        options: [
            "Tham dục, sân hận, trạo cử, thụy miên, nghi ngờ.",
            "Sắc, thanh, hương, vị, xúc.",
            "Tham, sân, si, mạn, nghi.",
            "Sinh, lão, bệnh, tử, sầu bi khổ ưu não."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 29: Bảy giác chi trong phần \"quán niệm pháp nơi pháp\" gồm những yếu tố nào?",
        options: [
            "Niệm, trạch pháp, tinh tấn, hỷ, khinh an, định, tuệ.",
            "Tín, tấn, niệm, định, tuệ, khinh an, hỷ, xả.",
            "Niệm, trạch pháp, tinh tấn, hỷ, khinh an, định, xả.",
            "Chánh kiến, chánh tư duy, chánh ngữ, chánh nghiệp, chánh mạng, chánh tinh tấn, chánh niệm, chánh định."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 30: Đức Phật dạy cách diệt trừ tâm ganh ghét và đố kỵ bằng pháp nào?",
        options: [
            "Quán sát lỗi lầm của bản thân.",
            "Tu tập từ bi và nhẫn nhục (thân, miệng, ý hành từ).",
            "Tránh xa người mình ganh ghét.",
            "Bố thí tài sản cho người nghèo."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 31: Theo Kinh Kẻ Đi Tìm Con, lẽ thường ở thế gian gây ra đau khổ là gì?",
        options: [
            "Không có tài sản và danh vọng.",
            "Bị người đời phỉ báng, oan uổng.",
            "Sinh, già, bệnh, chết; thương yêu chia lìa, oán ghét gặp nhau.",
            "Không gặp được minh sư thiện hữu."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 32: Tôn giả Tu-bồ-đề đã dùng nguyên lý nào để trả lời câu hỏi \"thân bệnh này từ đâu sanh\" (Kinh Đế-thích Thăm Bệnh)?",
        options: [
            "Nghiệp báo từ tiền kiếp không thể thay đổi.",
            "Do tứ đại bất hòa sinh ra bệnh.",
            "Pháp pháp tự sanh, pháp pháp tự diệt; pháp có thể sanh/diệt trừ pháp.",
            "Do tà ma ngoại đạo phá hoại."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 33: Trong Kinh Xả Bỏ Hai Kiến, \"Chấp có\" và \"Chấp không\" được định nghĩa như thế nào?",
        options: [
            "Chấp có là chấp ngã; Chấp không là chấp pháp.",
            "Chấp có là chấp thực có cõi dục, sắc, vô sắc; Chấp không là cái thấy liên hệ 62 loại kiến chấp.",
            "Chấp có là tin nhân quả; Chấp không là bác bỏ nhân quả.",
            "Chấp có là thấy vạn vật tồn tại; Chấp không là thấy vạn vật là hư vô."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 34: Biểu hiện cụ thể của người \"chấp thật có cõi dục\" là gì?",
        options: [
            "Muốn được tái sinh làm vua chúa.",
            "Tích lũy thật nhiều tài sản.",
            "Đắm nhiễm vào năm Dục (sắc, thanh, hương, vị, xúc).",
            "Khởi tâm sân hận khi gặp trái ý."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 35: Tiêu chuẩn phân biệt giữa Người ngu và Người trí trong \"Kinh Hai Tướng\" nằm ở đâu?",
        options: [
            "Sự hiểu biết nhiều hay ít kinh điển.",
            "Khả năng tranh luận và thuyết pháp.",
            "Hành động đối với những việc được phép (cần làm) và không được phép làm.",
            "Sự giàu sang và quyền lực trong xã hội."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 36: Hai nhân duyên phát sinh Chánh kiến (Kinh Chánh Kiến) là gì?",
        options: [
            "Đọc kinh sách và tự mình chiêm nghiệm.",
            "Lãnh thụ sự giáo hóa (nghe pháp) và tư duy pháp chỉ quán.",
            "Bố thí trì giới và tu tập thiền định.",
            "Xuất gia tu hành và nhập thất."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 37: Trong Kinh Pháp Soi Sáng, \"Soi sáng\" và \"Pháp\" được định nghĩa ra sao?",
        options: [
            "Soi sáng là trí tuệ; Pháp là giới luật.",
            "Soi sáng là thấy ánh sáng quang minh; Pháp là thần chú.",
            "Soi sáng là dứt sạch tham sân si; Pháp là Bát chánh đạo.",
            "Soi sáng là hiểu thấu nhân quả; Pháp là Tứ diệu đế."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 38: Hai sức mạnh (Hai lực) giúp thành tựu Vô Thượng Chánh Đẳng Chánh Giác là gì?",
        options: [
            "Tín lực và Tấn lực.",
            "Định lực và Tuệ lực.",
            "Từ bi lực và Trí tuệ lực.",
            "Nhẫn lực và Tư duy lực."
        ],
        correctAnswer: 3
    },
    {
        question: "Câu 39: Quả báo làm người của việc KHÔNG sát sanh là gì?",
        options: [
            "Trở nên vô cùng giàu có.",
            "Thọ mạng dài lâu.",
            "Có quyền lực cao tột.",
            "Không bao giờ bị bệnh tật."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 40: Hậu quả cụ thể khi tái sanh làm người của hành vi Trộm cướp là gì?",
        options: [
            "Bị khinh chê.",
            "Ngu si, mất trí nhớ.",
            "Nghèo khổ.",
            "Yểu mệnh."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 41: Một người sống trong môi trường dâm loạn, bị mọi người khinh chê là do dư báo của tội gì?",
        options: [
            "Nói dối.",
            "Uống rượu.",
            "Tà dâm.",
            "Trộm cướp."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 42: Nền tảng đem lại tiếng tốt, phước báo và làm cơ sở chứng Niết-bàn xuất phát từ việc giữ gìn giới nào?",
        options: [
            "Không sát sanh.",
            "Không trộm cướp.",
            "Không nói dối (chân thật).",
            "Không uống rượu."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 43: Tác hại nguy hiểm nhất về mặt TÂM LINH của việc uống rượu đối với lộ trình giác ngộ là gì?",
        options: [
            "Gây tốn kém tiền bạc, phá sản.",
            "Dẫn đến bạo lực gia đình, xã hội.",
            "Tổn hại sức khỏe, sinh bệnh tật.",
            "Ngu si, mất chánh niệm (nhân của Vô minh)."
        ],
        correctAnswer: 3
    },
    {
        question: "Câu 44: Nữ cư sĩ nào được nhắc đến như là biểu tượng của đệ nhất thiền định tại gia (gương sáng trong Kinh Ưu-bà-di Dạy Con Gái)?",
        options: [
            "Câu-thù-đa-la.",
            "Sấm-ma.",
            "Nan-đà Mẫu.",
            "Ưu-bát Hoa Sắc."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 45: Pháp hộ tâm (Kinh Không buông lung) đòi hỏi hành giả phải khéo trừ diệt những lậu hoặc nào đã sanh?",
        options: [
            "Kiến lậu, tư lậu, vô minh lậu.",
            "Dục lậu, hữu lậu, vô minh lậu.",
            "Tham lậu, sân lậu, si lậu.",
            "Thân lậu, khẩu lậu, ý lậu."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 46: Trong Kinh Dục Tưởng, Đức Phật dạy nếu tâm loạn tưởng khiến cho các tưởng dục, sân, thụy miên, trạo cử, nghi chưa sinh liền sinh khởi, đã khởi lại khiến tăng trưởng, vậy hành giả cần tu tập bước CƠ BẢN nào để đối trị?",
        options: [
            "Phải luôn chuyên tâm quán tưởng bất tịnh.",
            "Chớ có loạn tưởng, phải luôn chánh niệm.",
            "Phải luôn giữ tâm thanh tịnh, không làm điều ác.",
            "Phải nỗ lực thiền định và dứt bỏ thế gian."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 47: Trong Kinh Niệm Xứ, thao tác tu tập \"bốn niệm xứ\" được Đức Phật định nghĩa cụ thể là gì?",
        options: [
            "Quán thân vô thường; quán thọ là khổ; quán tâm vô ngã; quán pháp bất tịnh.",
            "Quán thân nơi thân; quán thọ nơi thọ; quán tâm nơi tâm; quán pháp nơi pháp.",
            "Niệm Phật, niệm Pháp, niệm Tăng, niệm Tịch lặng.",
            "Từ bi quán, Duyên khởi quán, Bất tịnh quán, Giới phân biệt quán."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 48: Theo Kinh Nói dối và Không nói dối, quả báo cụ thể của người hay nói dối khi bị đọa làm người là gì?",
        options: [
            "Bị ngu si, mất chánh niệm.",
            "Bị nghèo khổ, bần cùng.",
            "Bị mọi người chán ghét.",
            "Bị yểu mệnh, nhiều bệnh tật."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 49: Trong Kinh Tạo Phước, Đức Phật định nghĩa \"vô phước\" là gì?",
        options: [
            "Là sự thiếu thốn về tài sản vật chất thế gian.",
            "Là không biết bố thí, cúng dường Tam Bảo.",
            "Là nguồn gốc của các khổ, những thứ sầu, lo, khổ, não không thể tính kể.",
            "Là người sinh ra không có căn tu, tà kiến."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 50: Để làm rõ thêm về \"Thiện pháp\" trong Kinh Không Buông Bỏ Thiện Pháp, tám đạo phẩm của bậc Hiền thánh bao gồm những chi phần nào?",
        options: [
            "Tín, Tấn, Niệm, Định, Tuệ, Khinh an, Hỷ, Xả.",
            "Chánh kiến, Chánh tư duy, Chánh ngữ, Chánh nghiệp, Chánh mạng, Chánh tinh tấn, Chánh niệm, Chánh định.",
            "Từ, Bi, Hỷ, Xả, Bố thí, Trì giới, Nhẫn nhục, Tinh tấn.",
            "Sắc, Thọ, Tưởng, Hành, Thức, Nhãn, Nhĩ, Tỷ."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 51: Trong Kinh Tà dâm và Không tà dâm, việc giữ giới không tà dâm đem lại kết quả gì cho hành giả?",
        options: [
            "Đem lại phước báo, đời sống thanh tịnh và hướng đến giải thoát.",
            "Đem lại thọ mạng dài lâu, phước cõi người, cõi trời.",
            "Giúp trí tuệ sáng suốt, phước báo tăng trưởng.",
            "Đời này an vui, đời sau sanh thiện thú và không bị nghèo khổ."
        ],
        correctAnswer: 0
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = [];
let answered = false;

// Initialize Quiz
function initQuiz() {
    document.getElementById('totalQuestions').textContent = quizData.length;
    showQuestion(0);
}

// Show Question
function showQuestion(index) {
    const question = quizData[index];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const resultSection = document.getElementById('resultSection');
    const buttonGroup = document.querySelector('.button-group');

    // Reset
    answered = false;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    resultSection.style.display = 'none';
    buttonGroup.style.display = 'flex';

    // Generate options
    question.options.forEach((option, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span>${option}</span>
        `;
        optionDiv.onclick = () => selectAnswer(idx);
        optionsContainer.appendChild(optionDiv);
    });

    // Update progress
    updateProgress();
    updateButtons();

    // Scroll to top
    window.scrollTo(0, 0);
}

// Select Answer
function selectAnswer(index) {
    if (answered) return;

    answered = true;
    userAnswers[currentQuestion] = index;

    const options = document.querySelectorAll('.option');
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    // Show result
    options.forEach((option, idx) => {
        option.classList.add('disabled');
        if (idx === correctAnswer) {
            option.classList.add('correct');
        }
        if (idx === index && idx !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });

    // Show result message and correct answer
    showResultMessage(index === correctAnswer);
    showCorrectAnswer();

    // Show buttons
    updateButtons();
}

// Show Result Message
function showResultMessage(isCorrect) {
    const resultSection = document.getElementById('resultSection');
    const resultMessage = document.getElementById('resultMessage');

    resultSection.style.display = 'block';

    if (isCorrect) {
        resultMessage.textContent = '✅ Chính xác!';
        resultMessage.className = 'result-message correct';
    } else {
        resultMessage.textContent = '❌ Sai!';
        resultMessage.className = 'result-message incorrect';
    }
}

// Show Correct Answer
function showCorrectAnswer() {
    const question = quizData[currentQuestion];
    const correctAnswerDisplay = document.getElementById('correctAnswerDisplay');
    const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
    const correctAnswerText = question.options[question.correctAnswer];

    correctAnswerDisplay.innerHTML = `
        <strong>Đáp án đúng:</strong> <strong>${correctAnswerLetter}. ${correctAnswerText}</strong>
    `;
}

// Update Progress Bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
}

// Update Buttons
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    // Show/hide prev button
    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';

    // Show/hide next and finish buttons
    if (answered) {
        if (currentQuestion < quizData.length - 1) {
            nextBtn.style.display = 'block';
            finishBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'block';
        }
    } else {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'none';
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// Finish Quiz
function finishQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    const finalScore = document.getElementById('finalScore');

    quizContainer.style.display = 'none';
    finalScore.style.display = 'block';

    calculateScore();
}

// Calculate Score
function calculateScore() {
    let correctCount = 0;

    quizData.forEach((question, idx) => {
        if (userAnswers[idx] === question.correctAnswer) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / quizData.length) * 100);

    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('totalCount').textContent = quizData.length;
    document.getElementById('scorePercentage').textContent = percentage + '%';

    displayAnswerReview(correctCount);
}

// Display Answer Review
function displayAnswerReview(correctCount) {
    const answerReview = document.getElementById('answerReview');
    answerReview.innerHTML = '';

    quizData.forEach((question, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = userAnswer === question.correctAnswer;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const questionLetter = String.fromCharCode(65 + userAnswer);
        const userAnswerText = question.options[userAnswer];
        const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
        const correctAnswerText = question.options[question.correctAnswer];

        reviewItem.innerHTML = `
            <div class="review-question">${idx + 1}. ${question.question}</div>
            <div class="review-answer">
                <strong>Trả lời của bạn:</strong> ${questionLetter}. ${userAnswerText}<br>
                ${isCorrect ? '<strong style="color: var(--success-color);">✅ Đúng!</strong>' : `<strong style="color: var(--error-color);">❌ Sai!</strong><br><strong>Đáp án đúng:</strong> ${correctAnswerLetter}. ${correctAnswerText}`}
            </div>
        `;

        answerReview.appendChild(reviewItem);
    });
}

// Restart Quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    answered = false;

    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('finalScore').style.display = 'none';

    showQuestion(0);
}

// Event Listeners
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('prevBtn').addEventListener('click', previousQuestion);
document.getElementById('finishBtn').addEventListener('click', finishQuiz);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

// Initialize Quiz on Load
window.addEventListener('load', initQuiz);
