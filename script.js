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
        explanation: "Trong văn bản phẩm Tựa, người được phó chúc là Tôn giả Ưu-đa-la. Hậu quả của việc xem thường kinh được xác định cụ thể là ĐOẠ LẠC XUỐNG HÀNG PHÀM PHU (mất đi cơ hội giải thoát), chứ không nói chung chung là đọa địa ngục hay mất phước."
    },
    {
        question: "Câu 2: Lời cảnh báo của Tôn giả A-nan đối với người xem thường Khế kinh Tăng Nhất A-hàm là gì?",
        options: [
            "Sẽ bị đọa vào địa ngục vô gián.",
            "Liền bị đọa lạc xuống hàng phàm phu.",
            "Mất hết phước báu trong hiện tại.",
            "Đời đời sinh ra bần cùng, ngu si."
        ],
        correctAnswer: 1,
        explanation: "Trong văn bản phẩm Tựa, người được phó chúc là Tôn giả Ưu-đa-la. Hậu quả của việc xem thường kinh được xác định cụ thể là ĐOẠ LẠC XUỐNG HÀNG PHÀM PHU (mất đi cơ hội giải thoát), chứ không nói chung chung là đọa địa ngục hay mất phước."
    },
    {
     question: "Câu 3: Tôn giả A-nan cho biết giá trị đặc biệt của kinh này thế nào?",
        options: [
            "Là giáo pháp chuyên về thiền định và trí tuệ.",
            "Là giáo pháp chỉ dành cho bậc xuất gia thọ cụ túc giới.",
            "Là giáo pháp sanh ra ba mươi bảy đạo phẩm và các pháp đều từ đây sanh ra.",
            "Là tập hợp các giới luật căn bản của chư Phật."
        ],
        correctAnswer: 2,
        explanation: "Kinh văn khẳng định vị thế NGUỒN CỘI của Tăng Nhất A-hàm là nơi sinh ra 37 phẩm trợ đạo và tất cả các pháp.",
    },
    {
        question: "Câu 4: Bài kệ nào được Tôn giả A-nan viện dẫn để chứng minh chỉ cần một bài kệ trong Tăng Nhất A-hàm cũng có đủ 37 đạo phẩm?",
        options: [
            "Các hành vô thường / Là pháp sanh diệt.",
            "Tâm dẫn đầu các pháp / Tâm làm chủ, tâm tạo.",
            "Không làm mọi điều ác / Thành tựu các hạnh lành.",
            "Chớ làm các việc ác / Siêng tu các hạnh lành / Giữ tâm mình thanh tịnh / Là lời chư Phật dạy."
        ],
        correctAnswer: 3,
        explanation: "Bài kệ được ngài A-nan viện dẫn để chứng minh sự bao hàm toàn bộ giới, định, tuệ (37 đạo phẩm) trong Tăng Nhất A-hàm.",
    },
    {
        question: "Câu 5: Tôn giả A-nan trả lời thế nào khi được Tôn giả Ca-diếp hỏi vì sao giao phó Tăng nhất A-hàm mà không trao truyền hết thảy các pháp?",
        options: [
            "Tăng Nhất A-hàm là bộ kinh tóm tắt dễ nhớ nhất.",
            "Tăng nhất A-hàm tức là các pháp, các pháp chính là Tăng nhất A-hàm, vốn chỉ là một mà không có hai.",
            " Các kinh khác đã được phó chúc cho các đại đệ tử khác.",
            "Chúng sanh thời mạt pháp chỉ có thể thọ trì bộ kinh này."
        ],
        correctAnswer: 1,
        explanation:"Câu trả lời mang tính triết học BẤT NHỊ và tính bao trùm, khẳng định Tăng Nhất A-hàm đại diện trọn vẹn cho toàn bộ giáo pháp",
    },
    {
        question: "Câu 6: Trong Kinh Công Đức Niệm Phật, Đức Phật dạy phương pháp tu niệm Phật như thế nào?",
        options: [
            "Chuyên tâm trì niệm danh hiệu Đức Phật A Di Đà.",
            "Lạy Phật mỗi ngày và tụng đọc kinh điển.",
            "Kiết-già tĩnh tọa, buộc niệm một chỗ, nhất tâm quán tưởng và nhớ nghĩ công đức Như Lai: đầy đủ mười lực, bốn vô sở úy.",
            "Xây dựng hình tượng Phật và cúng dường hoa hương."
        ],
        correctAnswer: 2,
        explanation:"NIỆM PHẬT trong A-hàm là pháp hành thiền quán, quán niệm ân đức/phẩm chất giác ngộ của Phật như Thập lực, Tứ vô sở úy...",
    },
     {
        question: "Câu 7: Trong Kinh Công Đức Niệm Pháp, Đức Phật dạy tu niệm Pháp như thế nào?",
        options: [
            "Hành giả chỉ cần chuyên cần đọc tụng kinh điển hàng ngày, ghi nhớ mặt chữ mà không cần quán chiếu nội tâm.",
            "Hành giả an trú chánh niệm, chuyên tâm niệm Pháp, quán Chánh pháp là pháp đưa đến vô dục, xa lìa trói buộc và ngăn che, không bị loạn tưởng pha tạp.",
            "Hành giả tập trung vào việc cầu xin sự gia hộ của chư Phật để đạt được phước báu nhân thiên, sung túc ở đời này.",
            "Hành giả tu tập bằng cách ép xác khổ hạnh một cách nghiêm ngặt để nhanh chóng đoạn trừ mọi phiền não thế gian."
        ],
        correctAnswer: 1,
        explanation:"Niệm Pháp là hướng tâm và quán sát đặc tính 'ly dục, vô nhiệt, giải thoát' của Chánh pháp, từ đó tâm hành giả cũng trở nên tịch tĩnh, xa lìa trói buộc.",
    },
    {
        question: "Câu 8: Trong Kinh Công Đức Niệm Pháp, đặc tính cốt lõi của Chánh pháp mà hành giả cần quán niệm là gì?",
        options: [
            "Là pháp vi diệu nhiệm mầu, thâm sâu khó hiểu.",
            "Là pháp đưa đến vô dục, xa lìa trói buộc và ngăn che, không bị loạn tưởng pha tạp.",
            "Là pháp mang lại phước báu nhân thiên tức thì.",
            "Là pháp tổng hợp toàn bộ triết lý thế gian."
        ],
        correctAnswer: 1,
        explanation:"Niệm Pháp là hướng tâm và quán sát đặc tính 'ly dục, vô nhiệt, giải thoát' của Chánh pháp, từ đó tâm hành giả cũng trở nên tịch tĩnh, xa lìa trói buộc.",

    },
    {
        question: "Câu 9: Đối tượng Thánh chúng trong Kinh Công Đức Niệm Tăng KHÔNG bao gồm đặc tính nào dưới đây?",
        options: [
            "Thành tựu giới, định, tuệ, giải thoát, giải thoát tri kiến.",
            "Gồm bốn đôi tám bậc.",
            "Là ruộng phước của thế gian.",
            "Là những vị đã dứt sạch nhân duyên sinh tử, hiện thân Phật."
        ],
        correctAnswer: 3,
        explanation:"Đối tượng \"Tăng\" mà hành giả hướng tâm đến có đặc điểm: thành tựu giới, định, tuệ, giải thoát và giải thoát tri kiến; gồm bốn đôi tám bậc; là ruộng phước của thế gian.",

    },
    {
        question: "Câu 10: Trong Kinh Công Đức Niệm Tịch Lặng, Đức Phật dạy cách tu như thế nào?",
        options: [
            "Hành giả kiết-già tĩnh tọa, buộc niệm một chỗ, chuyên niệm tịch lặng; dứt trừ nghĩ tưởng, tâm lắng trong, không vọng động.",
            "Hành giả kiết-già tĩnh tọa, buộc niệm một chỗ, trì chú liên tục trong im lặng.",
            "Hành giả kiết-già tĩnh tọa, buộc niệm một chỗ, quán sát sự vô thường của thân thể.",
            "Hành giả kiết-già tĩnh tọa, buộc niệm một chỗ, tách biệt hoàn toàn khỏi đời sống xã hội."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 11: Trong Kinh Ưu-bà-di Dạy Con Trai, người mẹ khuyên con nếu sống tại gia thì noi theo hình mẫu nào?",
        options: [
            "Trưởng giả Cấp Cô Độc và Lộc Tử Mẫu.",
            "Trưởng giả Chất-đa và đồng tử Tượng.",
            "Tỳ-kheo Xá-lợi-phất và Tỳ-kheo Mục-kiền-liên.",
            "Trưởng giả Duy-ma-cật và đồng tử Thiện Tài."
        ],
        correctAnswer: 1,
        explanation:"Chất-đa và Đồng tử Tượng là hai cư sĩ đệ nhất được Phật tán thán.",
    },
     {
        question: "Câu 12: Trong Kinh Ưu-bà-di Dạy Con Trai, người mẹ khuyên con nếu xuất gia thì noi theo hình mẫu nào?",
        options: [
            "Trưởng giả Cấp Cô Độc và Lộc Tử Mẫu.",
            "Trưởng giả Chất-đa và đồng tử Tượng.",
            "Tỳ-kheo Xá-lợi-phất và Tỳ-kheo Mục-kiền-liên.",
            "Trưởng giả Duy-ma-cật và đồng tử Thiện Tài."
        ],
        correctAnswer: 1,
        explanation:"Xá-lợi-phất và Mục-kiền-liên là hai thượng thủ Tăng. Đây là những vị chuẩn mực được nêu trong kinh.",
    },
    {
        question: "Câu 13: Nếu người con gái chọn con đường xuất gia (Kinh Ưu-bà-di Dạy Con Gái), người mẹ khuyên nên noi gương ai?",
        options: [
            "Tỳ-kheo-ni Liên Hoa Sắc và Tỳ-kheo-ni Đại Ái Đạo.",
            "Ưu-bà-di Câu-thù-đa-la và Nan-đà Mẫu.",
            "Tỳ-kheo-ni Sấm-ma và Tỳ-kheo-ni Ưu-bát Hoa Sắc.",
            "Tỳ-kheo-ni Gia-du-đà-la và Tỳ-kheo-ni Sấm-ma."
        ],
        correctAnswer: 2,
        explanation:" Văn bản kinh Tăng Nhất A-hàm cụ thể nêu tên: Câu-thù-đa-la (đệ nhất đa văn cư sĩ nữ) và Nan-đà Mẫu (đệ nhất thiền định cư sĩ nữ); Sấm-ma (đệ nhất trí tuệ Ni) và Ưu-bát Hoa Sắc (đệ nhất thần thông Ni).",
    },
    {
        question: "Câu 14: Trong Kinh Ưu-bà-di Dạy Con Gái, những Nữ cư sĩ nào được nêu làm gương sáng? ",
        options: [
            "Tỳ-kheo-ni Liên Hoa Sắc và Tỳ-kheo-ni Đại Ái Đạo.",
            "Ưu-bà-di Câu-thù-đa-la và Nan-đà Mẫu.",
            "Tỳ-kheo-ni Sấm-ma và Tỳ-kheo-ni Ưu-bát Hoa Sắc.",
            "Tỳ-kheo-ni Gia-du-đà-la và Tỳ-kheo-ni Sấm-ma."
        ],
        correctAnswer: 1,
        explanation:" Văn bản kinh Tăng Nhất A-hàm cụ thể nêu tên: Câu-thù-đa-la (đệ nhất đa văn cư sĩ nữ) và Nan-đà Mẫu (đệ nhất thiền định cư sĩ nữ); Sấm-ma (đệ nhất trí tuệ Ni) và Ưu-bát Hoa Sắc (đệ nhất thần thông Ni).",
    },
    {
        question: "Câu 15: Trong kinh Đạo Phẩm, ghi “Có một người mà khi xuất hiện ở đời liền có ba mươi bảy đạo phẩm xuất hiện ở đời”. Người ấy là ai?",
        options: [
            "Chuyển Luân Thánh Vương.",
            "Đức Như Lai - Bậc A-la-hán Đẳng Chánh Giác.",
            "Bồ Tát Nhất Sanh Bổ Xứ.",
            "Các vị Thanh Văn đại đệ tử."
        ],
        correctAnswer: 1,
        explanation:"Đó là đức Như Lai, bậc A-la-hán Ðẳng Chánh Giác. Các vị khác dù vĩ đại nhưng không phải là nguồn gốc làm xuất hiện trọn vẹn 37 đạo phẩm.",
    },
    {
        question: "Câu 16: Trong kinh Đạo Phẩm, Ba mươi bảy đạo phẩm là gì?",
        options: [
            "4 niệm xứ, 4 chánh cần, 4 như ý túc, 5 căn, 5 lực, 7 giác chi, 8 chánh đạo.",
            "4 niệm xứ, 4 chánh đoạn, 4 thần túc, 5 căn, 5 lực, 7 giác chi, 8 Thánh đạo.",
            "4 niệm xứ, 4 chánh đoạn, 4 như ý túc, 5 căn, 5 lực, 7 bồ-đề phần, 8 Thánh đạo.",
            "4 chánh niệm, 4 chánh đoạn, 4 thần túc, 5 căn, 5 lực, 7 giác chi, 8 Thánh đạo."
        ],
        correctAnswer: 1,
        explanation:"Cần phân biệt chính xác thuật ngữ dùng trong bản kinh này (ví dụ dùng 'chánh đoạn' thay vì 'chánh cần', 'thần túc' thay vì 'như ý túc'",
    },
    {
        question: "Câu 17: Trong kinh Mất Hẳn, cho biết “Nếu đức Như Lai không còn nơi cõi đời thì ba mươi bảy đạo phẩm cũng sẽ diệt tận.” Đức Phật dạy cần phải làm gì?",
        options: [
            "Phải luôn cung kính chư Phật.",
            "Phải xây dựng nhiều chùa tháp.",
            "Phải kết tập kinh điển.",
            "Phải truyền bá pháp môn niệm Phật."
        ],
        correctAnswer: 0,
        explanation:"Để đối trị sự diệt tận của chánh pháp khi Phật vắng bóng, kinh dạy hạnh cung kính chư Phật là nền tảng.",
    },
    {
        question: "Câu 18: Trong kinh Tâm Nhanh Nhạy, Đức Phật dạy “người phàm phu thì khó có thể quán sát được tâm ý.” Vậy cần phải làm gì?",
        options: [
            "Buông xả mọi ý niệm.",
            "Luôn hàng phục tâm ý, khiến hướng theo đường lành.",
            "Tìm nơi thanh vắng để ép xác tu khổ hạnh.",
            "Mặc kệ tâm ý vì nó vốn vô thường."
        ],
        correctAnswer: 1,
        explanation:"Đối với cái tâm nhanh nhạy khó bắt, giải pháp thực tiễn Đức Phật dạy là chủ động hàng phục và dẫn dắt nó về nẻo thiện (đường lành).",
    },
    {
        question: "Câu 19: Hình ảnh nào được dùng để ví dụ cho sự nhanh nhạy, niệm trước và niệm sau không giống nhau của tâm (Kinh Tâm Vô Thường)?",
        options: [
            "Dòng thác chảy xiết.",
            "Bóng chớp trên trời.",
            "Khỉ vượn chuyền cành.",
            "Ngựa hoang chạy rông."
        ],
        correctAnswer: 2,
        explanation:"Hình ảnh so sánh trong kinh: 'Giống như khỉ vượn, vừa buông cành này liền chụp cành kia, lòng không an định. Tâm cũng như thế, niệm trước và niệm sau đã không giống nhau'. Hình ảnh 'khỉ vượn chuyền cành' minh họa cho sự phan duyên và biến đổi chớp nhoáng của tâm.",
    },
    {
        question: "Câu 20: Kinh Đọa Lạc chỉ ra nguyên nhân trực tiếp nhất khiến một người đọa địa ngục nhanh như khoảnh khắc co duỗi tay lúc qua đời là gì?",
        options: [
            "Khởi tâm tham ái tài sản.",
            "Ôm tâm tà kiến đoạn diệt.",
            "Ôm tâm sân hận.",
            "Tiếc nuối người thân."
        ],
        correctAnswer: 2,
        explanation:"Mặc dù tham và tà kiến đều nguy hiểm, nhưng kinh nhấn mạnh tâm sân hận (tâm hành xấu ác) lúc cận tử là lực đẩy trực tiếp xuống địa ngục nhanh nhất.",
    },
    {
        question: "Câu 21: Trong kinh Sanh Thiên, Đức Phật dạy thế nào về một Người được sanh lên cõi trời nhanh như khoảnh khắc co duỗi cánh tay, khi người ấy qua đời?",
        options: [
            "Lúc khởi tâm thiện diệu.",
            "Lúc dứt sạch hoàn toàn lậu hoặc.",
            "Lúc đang tụng đọc kinh điển.",
            "Lúc đang làm phước bố thí."
        ],
        correctAnswer: 0,
        explanation:"Tương ứng với chiều ác, tâm hành thiện diệu lúc lâm chung đưa người tái sanh thiên giới.",
    },
    {
        question: "Câu 22: Trong kinh Dục Tưởng, Đức Phật dạy nếu tâm loạn tưởng thì khiến cho các tưởng dục, sân, thụy miên, trạo cử, nghi chưa sinh LIỀN sinh khởi, đã khởi LẠI khiến tăng trưởng, vậy cần phải tu tập thế nào?",
        options: [
            "Phải luôn chánh niệm.",
            "Phải luôn chuyên tâm quán tưởng bất tịnh.",
            "Phải luôn tu tập từ bi quán.",
            "Phải luôn thực hành sổ tức quán (đếm hơi thở)."
        ],
        correctAnswer: 0,
        explanation:"Loạn tưởng là gốc của triền cái, nên đối trị là chánh niệm (không loạn tưởng).",
    },
    {
        question: "Câu 23: Trong kinh Dục Tưởng, Đức Phật đã dạy pháp tu tập như thế nào khiến cho các tưởng dục, sân, thụy miên, trạo cử, nghi chưa sinh thì KHÔNG sinh khởi, đã sinh khởi liền bị TRỪ DIỆT?",
        options: [
            "Phải luôn chánh niệm.",
            "Phải luôn chuyên tâm quán tưởng bất tịnh.",
            "Phải luôn tu tập từ bi quán.",
            "Phải luôn thực hành sổ tức quán (đếm hơi thở)."
        ],
        correctAnswer: 1,
        explanation:"Kinh xác định Quán bất tịnh là pháp đặc hiệu nhất để chặn đứng dòng chảy của dục tưởng và 5 triền cái trong bối cảnh này.",
    },
    {
        question: "Câu 24: Định nghĩa của \"Hạnh không buông lung\" trong kinh Không Buông Lung là gì?",
        options: [
            "Không ngủ quá nhiều.",
            "Siêng năng làm việc thiện.",
            "Đó là phòng hộ tâm.",
            "Giữ gìn giới luật nghiêm ngặt."
        ],
        correctAnswer: 2,
        explanation:"Định nghĩa cụ thể của kinh về 'Không buông lung' chính là phòng hộ tâm (ngăn ngừa lậu hoặc).",
    },
    {
        question: "Câu 25: Trong kinh Không Buông Lung, đã dạy pháp hộ Tâm như thế nào?",
        options: [
            "Luôn phòng hộ tâm hữu lậu, pháp hữu lậu; dục lậu, hữu lậu, vô minh lậu chưa sanh thì khiến không sanh, đã sanh liền khéo trừ diệt.",
            "Luôn giữ tâm hoan hỷ trước mọi hoàn cảnh, không khởi niệm thiện hay ác để nhanh chóng đạt được trạng thái thiền định sâu.",
            "Phải liên tục trì tụng kinh chú hàng ngày để nhờ tha lực của chư Phật gia hộ, giúp tâm không bị tà ma ngoại đạo quấy phá.",
            "Xa lánh hoàn toàn xã hội trần tục, tìm nơi thâm sơn cùng cốc để thực hành khổ hạnh, triệt tiêu mọi cảm thọ của cơ thể."
        ],
        correctAnswer: 0,
        explanation:"Nội dung chi tiết: 'Luôn phòng hộ tâm hữu lậu, pháp hữu lậu,… tu tập hạnh không buông lung là phải luôn tự mình thận trọng; dục lậu, hữu lậu, vô minh lậu chưa sanh thì khiến không sanh, đã sanh liền khéo trừ diệt.' Pháp hộ tâm cụ thể là thận trọng ngăn ngừa và trừ diệt ba loại lậu hoặc (dục, hữu, vô minh).",
    },
    {
        question: "Câu 25: Trong kinh Không Buông Bỏ Thiện Pháp, \"Thiện pháp\" là gì?",
        options: [
            "Mười thiện nghiệp.",
            "Bố thí, trì giới, nhẫn nhục.",
            "Tám đạo phẩm của bậc Hiền thánh (Bát chánh đạo).",
            "Lục độ Ba-la-mật."
        ],
        correctAnswer: 2,
        explanation:"\"Đó là tám đạo phẩm của bậc Hiền thánh, gồm có: Chánh kiến, chánh tinh tấn, chánh ngữ, chánh nghiệp, chánh mạng, chánh tư duy, chánh niệm và chánh định.\"",
    },
    {
        question: "Câu 26: Theo Kinh Tạo Phước, ranh giới giữa Phước và Vô phước được định nghĩa dựa trên yếu tố nào?",
        options: [
            "Số lượng tài sản cúng dường.",
            "Báo ứng thọ lạc (phước) và Nguồn gốc các khổ (vô phước).",
            "Sự khen ngợi hay chê bai của người đời.",
            "Động cơ khi làm việc thiện."
        ],
        correctAnswer: 1,
        explanation:"Định nghĩa dựa trên cảm thọ quả báo: \"Báo ứng thọ lạc rất được yêu kính. Đây gọi là phước... Nguồn gốc của các khổ, những thứ sầu, lo, khổ, não không thể tính kể, không được yêu thích. Ðây gọi là vô phước.\"",
    },
    {
        question: "Câu 27: Bài kệ trong Kinh Ma Ba-tuần đúc kết điều gì về Phước?",
        options: [
            "Phước báu vốn là vô thường, không nên chấp trước.",
            "Có phước an lạc, không phước khổ sầu; đời này đời sau nhờ phước an lạc.",
            "Phước báu cõi trời cũng không bằng phước xuất gia.",
            "Chỉ cần vô ngã là có toàn bộ phước."
        ],
        correctAnswer: 1,
        explanation:" Bài kệ trong tài liệu: \"Thế Tôn nói kệ rằng: Có phước, an lạc/ không phước, khổ sầu /đời này, đời sau /nhờ phước, an lạc.\"",
    },
    {
        question: "Câu 28: Chìa khóa quyết định việc tu hành một pháp không thể phá trừ đường dữ hay đến được nẻo thiện (Kinh Đường Dữ) là gì?",
        options: [
            "Trí tuệ thấu suốt.",
            "Định lực kiên cố.",
            "Tâm có niềm tin tha thiết hay không.",
            "Sự dũng mãnh tinh tấn."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 29: Cũng trong Kinh Đường Dữ, pháp tu duy nhất để đến được Niết-bàn là gì?",
        options: [
            "Luôn giữ chánh niệm.",
            "Luôn quán vô thường.",
            "Luôn tu khổ hạnh.",
            "Luôn bố thí cúng dường."
        ],
        correctAnswer: 0,
        explanation:"Chánh niệm là pháp độc nhất đưa đến Niết-bàn trong ngữ cảnh kinh này.",
    },
    {
        question: "Câu 30: Trong kinh Đường Dữ, thế nào là tu hành một pháp mà không thể phá trừ đường dữ? và tu hành một pháp nào sẽ đến được nẻo thiện?",
        options: [
            "LBố thí thật nhiều tài sản vật chất và Xây dựng các đạo tràng to lớn.",
            "Tâm không có niềm tin tha thiết và Tâm tu tập với niềm tin tha thiết.",
            "Thực hành khổ hạnh ép xác nghiêm ngặt và Tìm kiếm các phép thần thông.",
            "Chỉ học thuộc lòng văn tự kinh điển và Cầu xin sự gia hộ từ bên ngoài."
        ],
        correctAnswer: 1,
        explanation:"Yếu tố quyết định là niềm tin: \"Đó là tâm không có niềm tin tha thiết\" (không phá trừ đường dữ) và \"Tâm tu tập với niềm tin tha thiết\" (đến nẻo thiện). => Chìa khóa để chuyển từ đường dữ sang nẻo thiện ở đây là Niềm tin tha thiết (Tín lực).",
    },
    {
        question: "Câu 31: Trong kinh Niệm Xứ, lối vào đạo làm thanh tịnh chúng sanh, diệt trừ khổ ưu, chứng đắc Niết-bàn là gì?",
        options: [
            "Diệt trừ tham sân si và tu tập Bát chánh đạo.",
            "Diệt trừ mười kiết sử và chứng Tứ thánh quả.",
            "Diệt trừ năm sự ngăn che và tu tập bốn niệm xứ.",
            "Đoạn diệt vô minh và hành thâm Bát nhã."
        ],
        correctAnswer: 2,
        explanation:"Con đường độc nhất (Nhất nhập đạo): \"Đó là phải diệt trừ năm sự ngăn che và tu tập bốn niệm xứ.\" Đây là tôn chỉ của phẩm Nhất Nhập Đạo.",
    },
    {
        question: "Câu 32: Trong Kinh Niệm Xứ, \"Một lối\" và \"Đạo\" được định nghĩa cụ thể là gì?",
        options: [
            "Một lối là chánh niệm; Đạo là Trung đạo.",
            "Một lối là tâm chuyên nhất; Đạo là tám đạo phẩm của Hiền thánh.",
            "Một lối là thiền định; Đạo là trí tuệ.",
            "Một lối là xuất gia; Đạo là Tứ diệu đế."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 33: Trong kinh Niệm Xứ, \"diệt trừ năm sự ngăn che\" là diệt trừ nhóm phiền não nào?",
        options: [
            "Tham dục, sân hận, trạo cử, thụy miên, nghi ngờ.",
            "Sắc, thanh, hương, vị, xúc.",
            "Tham, sân, si, mạn, nghi.",
            "Sinh, lão, bệnh, tử, sầu bi khổ ưu não."
        ],
        correctAnswer: 0,
        explanation:"Năm sự ngăn che (Ngũ triền cái) gồm: \"Diệt trừ sự ngăn che của tham dục, sân hận, trạo cử, thụy miên và nghi ngờ.\"",
    },
    {
        question: "Câu 34: Trong kinh Niệm Xứ, thế nào là tu tập bốn niệm xứ?",
        options: [
            "Quán thân bất tịnh; quán thọ thị khổ; quán tâm vô thường; quán pháp vô ngã.",
            "Quán thân nơi thân; quán thọ nơi thọ; quán tâm nơi tâm; quán pháp nơi pháp.",
            "Quán niệm hơi thở; quán niệm Phật; quán niệm Pháp; quán niệm Tăng.",
            "Quán sát quá khứ để sám hối; quán sát hiện tại để tỉnh giác; quán sát tương lai để phát nguyện; quán sát các pháp để xả ly."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 35: Bảy giác chi trong phần \"quán niệm pháp nơi pháp\" gồm những pháp nào?",
        options: [
            "Tu niệm, trạch pháp, tinh tấn, hỷ, khinh an, định, tuệ giác chi.",
            "Tín, tấn, niệm, định, tuệ, khinh an, hỷ, xả giác chi.",
            "Tu niệm, trạch pháp, tinh tấn, hỷ, khinh an, định, xả giác chi.",
            "Chánh kiến, chánh tư duy, chánh ngữ, chánh nghiệp, chánh mạng, chánh tinh tấn, chánh niệm, chánh định."
        ],
        correctAnswer: 2,
    },
    {
        question: "Câu 36: Trong kinh Ganh ghét và Đố kỵ, Đức Phật dạy cách diệt trừ tâm ganh ghét và đố kỵ bằng pháp nào?",
        options: [
            "Quán sát lỗi lầm của bản thân.",
            "Tu tập từ bi và nhẫn nhục (thân, miệng, ý hành từ).",
            "Tránh xa người mình ganh ghét.",
            "Bố thí tài sản cho người nghèo."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 37: Theo Kinh Kẻ Đi Tìm Con, Đức Phật dạy lẽ thường ở thế gian thế nào?",
        options: [
            "Không có tài sản và danh vọng.",
            "Bị người đời phỉ báng, oan uổng.",
            "Sanh, già, bệnh, chết là lẽ thường; thương yêu chia lìa, oán ghét gặp nhau là khổ.",
            "Không gặp được minh sư thiện hữu."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 38: Tôn giả Tu-bồ-đề đã dùng nguyên lý nào để trả lời câu hỏi \"thân bệnh này từ đâu sanh\" (Kinh Đế-thích Thăm Bệnh)?",
        options: [
            "Nghiệp báo từ tiền kiếp không thể thay đổi.",
            "Do tứ đại bất hòa sinh ra bệnh.",
            "Pháp pháp tự sanh, pháp pháp tự diệt; pháp có thể sanh/diệt trừ pháp.",
            "Do tà ma ngoại đạo phá hoại."
        ],
        correctAnswer: 2,
        explanation:"Câu trả lời dựa trên nguyên lý Duyên khởi và Vô ngã của các pháp. \"Pháp pháp tự sanh, pháp pháp tự diệt, pháp pháp tác động qua lại... pháp có thể sanh ra pháp, pháp có thể diệt trừ pháp.\"",
    },
    {
        question: "Câu 39: Trong Kinh Xả Bỏ Hai Kiến, \"Chấp có\" và \"Chấp không\" được định nghĩa như thế nào?",
        options: [
            "Chấp có là chấp ngã; Chấp không là chấp pháp.",
            "Chấp có là chấp thực có cõi dục, cõi sắc, cõi vô sắc; Chấp không là cái thấy liên hệ 62 loại kiến chấp.",
            "Chấp có là tin nhân quả; Chấp không là bác bỏ nhân quả.",
            "Chấp có là thấy vạn vật tồn tại; Chấp không là thấy vạn vật là hư vô."
        ],
        correctAnswer: 1,
        explanation:"Hai kiến chấp căn bản: \"Đó là chấp có và chấp không. Chấp có là chấp thực có cõi dục... Chấp không là cái thấy liên hệ sáu mươi hai loại kiến chấp.\"",
    },
    {
        question: "Câu 40: Trong kinh Xả Bỏ Hai Kiến, Thế nào là chấp thật có cõi dục?",
        options: [
            "Muốn được tái sinh làm vua chúa.",
            "Tích lũy thật nhiều tài sản.",
            "Đắm nhiễm vào năm Dục (sắc, thanh, hương, vị, xúc).",
            "Khởi tâm sân hận khi gặp trái ý."
        ],
        correctAnswer: 2,
        explanation:"Biểu hiện của chấp có cõi dục: Đó là năm Dục. Sắc mà mắt nhìn thấy, tai nghe tiếng, mũi ngửi mùi, lưỡi nếm vị, thân xúc chạm, rất đáng yêu đáng nhớ. Chấp cõi dục biểu hiện qua sự đắm nhiễm Năm dục (ngũ dục trưởng dưỡng).",
    },
    {
        question: "Câu 41: Trong kinh Hai Tướng, Đức Phật dạy biểu hiện hai tướng của người ngu và người trí khác nhau ở điểm nào?",
        options: [
            "Sự hiểu biết nhiều hay ít kinh điển.",
            "Khả năng tranh luận và thuyết pháp.",
            "Hành động đối với những việc được phép (cần làm) và không được phép làm.",
            "Sự giàu sang và quyền lực trong xã hội."
        ],
        correctAnswer: 2,
        explanation:"Tiêu chuẩn phân biệt nằm ở hành động đối với điều nên làm (thiện pháp) và điều không nên làm (ác pháp). Người ngu thì với những việc không được phép làm, nhưng vẫn cố làm; những việc cần làm thì lại chán bỏ; Người có Trí thì ngược lại.",
    },
    {
        question: "Câu 42: Hai nhân duyên phát sinh Chánh kiến (Kinh Chánh Kiến) là gì?",
        options: [
            "Đọc kinh sách và tự mình chiêm nghiệm.",
            "Lãnh thụ sự giáo hóa (nghe pháp) và tư duy pháp chỉ quán (như lý tác ý).",
            "Bố thí trì giới và tu tập thiền định.",
            "Xuất gia tu hành và nhập thất."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 43: Trong Kinh Pháp Soi Sáng, \"Soi sáng\" và \"Pháp\" được định nghĩa ra sao?",
        options: [
            "Soi sáng là trí tuệ; Pháp là giới luật.",
            "Soi sáng là thấy ánh sáng quang minh; Pháp là thần chú.",
            "Soi sáng là dứt sạch tham sân si; Pháp là Bát chánh đạo.",
            "Soi sáng là hiểu thấu nhân quả; Pháp là Tứ diệu đế."
        ],
        correctAnswer: 2,
        explanation:"Trong kinh định nghĩa: \"Soi sáng là tham dâm, sân hận và ngu si đã hoàn toàn dứt sạch. Pháp để hành trì soi sáng là chánh kiến, chánh tư duy... (Bát chánh đạo).\"",
    },
    {
        question: "Câu 44: Trong kinh Hai Lực, Đức Phật cho biết hai sức mạnh nào giúp thành tựu Vô Thượng Chánh Đẳng Chánh Giác?",
        options: [
            "Tín lực và Tấn lực.",
            "Định lực và Tuệ lực.",
            "Từ bi lực và Trí tuệ lực.",
            "Nhẫn lực và Tư duy lực."
        ],
        correctAnswer: 3,
        explanation:"Hai sức mạnh cốt lõi được nhắc đến trong kinh là Nhẫn lực (khả năng kham nhẫn) và Tư duy lực (khả năng quán chiếu). ",
    },
    {
        question: "Câu 45: Trong kinh Sát sanh và Không sát sanh, Đức Phật dạy quả báo của hành động sát sanh là gì?",
        options: [
            "Đưa đến đọa ác đạo, nếu sanh làm người thì yểu mệnh.",
            "Sẽ bị đọa vào ác đạo, nhưng nếu sanh làm người thì vẫn được hưởng sự giàu sang.",
            "Chỉ bị tổn giảm tài sản trong kiếp hiện tại chứ không ảnh hưởng đến thọ mạng.",
            "Sẽ chịu quả báo nhiều bệnh tật nhưng thọ mạng vẫn kéo dài."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 46: Trong kinh Sát sanh và Không sát sanh, Đức Phật dạy phước báo của hành động không sát sanh là gì?",
        options: [
            "Chỉ đem lại sức khỏe vô biên và không bao giờ mắc bệnh tật ở kiếp hiện tại.",
            "Đem lại thọ mạng dài lâu, phước cõi người, cõi trời và hướng đến Niết-bàn.",
            "Giúp hành giả lập tức đạt được thần thông và thấu hiểu mọi đạo lý trong trời đất.",
            "Đem lại quyền lực tối cao ở cõi người nhưng không giúp ích cho việc giải thoát."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 47: Quả báo khi tái sanh làm người của hành vi Trộm cướp là gì?",
        options: [
            "Bị khinh chê, sống trong môi trường dâm loạn.",
            "Ngu si, mất trí nhớ, nghèo khổ.",
            "Nghèo khổ.",
            "Yểu mệnh."
        ],
        correctAnswer: 2,
        explanation: "Trộm cướp đưa đến ác đạo, làm người thì nghèo khổ.<br>Bố thí đem lại phước báo lớn, đời này an vui, đời sau sanh thiện thú và có khả năng chứng Niết-bàn.",
    },
    {
        question: "Câu 48: Một người sống trong môi trường dâm loạn, bị mọi người khinh chê là quả báo của tội gì?",
        options: [
            "Nói dối.",
            "Uống rượu.",
            "Tà dâm.",
            "Trộm cướp."
        ],
        correctAnswer: 2,
        explanation: "Tà dâm đưa đến đọa lạc, làm người thì bị khinh chê, sống trong môi trường dâm loạn.<br>Không tà dâm đem lại phước báo, đời sống thanh tịnh và hướng đến giải thoát.",
    },
    {
        question: "Câu 49: Nền tảng đem lại tiếng tốt, phước báo và làm cơ sở chứng Niết-bàn xuất phát từ việc giữ gìn giới nào?",
        options: [
            "Không sát sanh.",
            "Không trộm cướp.",
            "Không nói dối (chân thật).",
            "Không uống rượu."
        ],
        correctAnswer: 2,
       explanation: "Nói dối đưa đến ác đạo, làm người bị chán ghét;<br>Không nói dối đem lại tiếng tốt, phước báo và là nền tảng để chứng Niết-bàn.",
    },
    {
        question: "Câu 50: Tác hại nguy hiểm nhất về mặt TÂM LINH của việc uống rượu đối với lộ trình giác ngộ là gì?",
        options: [
            "Gây tốn kém tiền bạc, phá sản.",
            "Dẫn đến bạo lực gia đình, xã hội.",
            "Tổn hại sức khỏe, sinh bệnh tật.",
            "Đoạ lạc, ngu si, mất chánh niệm (nhân của Vô minh)."
    
        ],
        correctAnswer: 3,
       explanation: "Uống rượu khiến đọa lạc, làm người thì ngu si, mất chánh niệm. Rượu là nhân của Si mê (Vô minh);<br>Không uống rượu giúp trí tuệ sáng suốt, phước báo tăng trưởng và hướng đến Niết-bàn.",
    },
    {
        question: "Câu 51: Nữ cư sĩ nào được nhắc đến như là biểu tượng của đệ nhất thiền định tại gia (gương sáng trong Kinh Ưu-bà-di Dạy Con Gái)?",
        options: [
            "Câu-thù-đa-la.",
            "Sấm-ma.",
            "Nan-đà Mẫu.",
            "Ưu-bát Hoa Sắc."
        ],
        correctAnswer: 2,
        explanation:"Nếu sống tại gia, noi theo ưu-bà-di Câu-thù-đa-la và Nan-đà Mẫu; Nếu xuất gia, noi theo Tỳ-kheo-ni Sấm-ma và Tỳ-kheo-ni Ưu-bát Hoa Sắc",
    },
    {
        question: "Câu 52: Pháp hộ tâm (Kinh Không buông lung) đòi hỏi hành giả phải khéo trừ diệt những lậu hoặc nào đã sanh?",
        options: [
            "Kiến lậu, tư lậu, vô minh lậu.",
            "Dục lậu, hữu lậu, vô minh lậu.",
            "Tham lậu, sân lậu, si lậu.",
            "Thân lậu, khẩu lậu, ý lậu."
        ],
        correctAnswer: 1,
        explanation:"Pháp hộ tâm cụ thể là thận trọng ngăn ngừa và trừ diệt ba loại lậu hoặc (dục, hữu, vô minh).",
    },
    {
        question: "Câu 53: Trong Kinh Dục Tưởng, Đức Phật dạy nếu tâm loạn tưởng khiến cho các tưởng dục, sân, thụy miên, trạo cử, nghi chưa sinh liền sinh khởi, đã khởi lại khiến tăng trưởng, vậy hành giả cần tu tập bước CƠ BẢN nào để đối trị?",
        options: [
            "Phải luôn chuyên tâm quán tưởng bất tịnh.",
            "Chớ có loạn tưởng, phải luôn chánh niệm.",
            "Phải luôn giữ tâm thanh tịnh, không làm điều ác.",
            "Phải nỗ lực thiền định và dứt bỏ thế gian."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 54: Trong Kinh Niệm Xứ, phép tu tập \"bốn niệm xứ\" được Đức Phật định nghĩa cụ thể là gì?",
        options: [
            "Quán thân vô thường; quán thọ là khổ; quán tâm vô ngã; quán pháp bất tịnh.",
            "Quán thân nơi thân; quán thọ nơi thọ; quán tâm nơi tâm; quán pháp nơi pháp.",
            "Niệm Phật, niệm Pháp, niệm Tăng, niệm Tịch lặng.",
            "Từ bi quán, Duyên khởi quán, Bất tịnh quán, Giới phân biệt quán."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 55: Trong Kinh Tạo Phước, Đức Phật dạy về\"vô phước\" là gì?",
        options: [
            "Là sự thiếu thốn về tài sản vật chất thế gian.",
            "Là không biết bố thí, cúng dường Tam Bảo.",
            "Là nguồn gốc của các khổ, những thứ sầu, lo, khổ, não không thể tính kể.",
            "Là người sinh ra không có căn tu, tà kiến."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 56: Để làm rõ thêm về \"Thiện pháp\" trong Kinh Không Buông Bỏ Thiện Pháp, tám đạo phẩm của bậc Hiền thánh bao gồm những chi phần nào?",
        options: [
            "Tín, Tấn, Niệm, Định, Tuệ, Khinh an, Hỷ, Xả.",
            "Chánh kiến, Chánh tư duy, Chánh ngữ, Chánh nghiệp, Chánh mạng, Chánh tinh tấn, Chánh niệm, Chánh định.",
            "Từ, Bi, Hỷ, Xả, Bố thí, Trì giới, Nhẫn nhục, Tinh tấn.",
            "Sắc, Thọ, Tưởng, Hành, Thức, Nhãn, Nhĩ, Tỷ."
        ],
        correctAnswer: 1
    },
];

// Quiz State
let currentQuestion = 0;
let userAnswers = [];
let answered = false;

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

    updateProgress();
    updateButtons();

    window.scrollTo(0, 0);
}

function selectAnswer(index) {
    if (answered) return;

    answered = true;
    userAnswers[currentQuestion] = index;

    const options = document.querySelectorAll('.option');
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    options.forEach((option, idx) => {
        option.classList.add('disabled');
        if (idx === correctAnswer) {
            option.classList.add('correct');
        }
        if (idx === index && idx !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });

    showResultMessage(index === correctAnswer);
    showCorrectAnswer();
    updateButtons();
}

function showResultMessage(isCorrect) {
    const resultSection = document.getElementById('resultSection');
    const resultMessage = document.getElementById('resultMessage');

    resultSection.style.display = 'block';

    if (isCorrect) {
        resultMessage.textContent = '✅ Chính xác!';
        resultMessage.className = 'result-message correct';
    } else {
        resultMessage.textContent = '❌ Huhu, sai rồi !';
        resultMessage.className = 'result-message incorrect';
    }
}
function showCorrectAnswer() {
    const question = quizData[currentQuestion];
    const correctAnswerDisplay = document.getElementById('correctAnswerDisplay');
    const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
    const correctAnswerText = question.options[question.correctAnswer];

    let displayHTML = `
        <strong>Đáp án đúng:</strong> <strong>${correctAnswerLetter}. ${correctAnswerText}</strong>
    `;

    // Nếu câu hỏi có trường 'explanation'
    if (question.explanation) {
        displayHTML += `
            <div class="explanation-box" style="margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-left: 4px solid #17a2b8; border-radius: 4px;">
                <strong>Giải thích:</strong> ${question.explanation}
            </div>
        `;
    }

    correctAnswerDisplay.innerHTML = displayHTML;
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
