const quizData = [
    {
        question: "Câu 1: Trong phẩm Tựa, Tôn giả A-nan giao phó Tăng Nhất A-hàm cho ai? Và đã dạy gì về thái độ đối với Khế kinh này?",
        options: [
            "Giao cho Tôn giả Ca-diếp; xem thường kinh sẽ bị tổn giảm phước báu.",
            "Giao cho Tôn giả Xá-lợi-phất; xem thường kinh sẽ bị đọa vào địa ngục.",
            "Giao cho Tôn giả Ưu-đa-la. Và “người nào xem thường Khế kinh trân quý này, liền bị đọa lạc xuống hàng phàm phu.”",
            "Giao cho Tôn giả Mục-kiền-liên; xem thường kinh sẽ bị mất đi trí tuệ."
        ],
        correctAnswer: 2,
        explanation: "Trong văn bản phẩm Tựa, người được phó chúc là Tôn giả Ưu-đa-la. Hậu quả của việc xem thường kinh được xác định cụ thể là \"đọa lạc xuống hàng phàm phu\" (mất đi cơ hội giải thoát), chứ không nói chung chung là đọa địa ngục hay mất phước."
    },
    {
        question: "Câu 2: Tôn giả A-nan cho biết giá trị đặc biệt của kinh này thế nào?",
        options: [
            "Là giáo pháp chuyên sâu về các phép thần thông biến hóa.",
            "“Tăng nhất A-hàm chính là giáo pháp sanh ra ba mươi bảy đạo phẩm, cho đến các pháp đều từ đây mà sanh ra.”",
            "Là bộ kinh tóm tắt tất cả các giới luật của hàng xuất gia.",
            "Là giáo pháp duy nhất dành riêng cho các bậc thượng trí."
        ],
        correctAnswer: 1,
        explanation: "Kinh văn khẳng định vị thế \"nguồn cội\" của Tăng Nhất A-hàm là nơi sinh ra 37 phẩm trợ đạo và tất cả các pháp."
    },
    {
        question: "Câu 3: Tôn giả A-nan đã cho biết chỉ cần một bài kệ trong Tăng Nhất A-hàm cũng có đủ ba mươi bảy đạo phẩm, nội dung là gì?",
        options: [
            "Các hành vô thường / Là pháp sanh diệt / Sanh diệt đã rồi / Tịch diệt là vui.",
            "Tâm dẫn đầu các pháp / Tâm làm chủ, tâm tạo / Nếu nói hay hành động / Với tâm niệm bất tịnh.",
            "“Chớ làm các việc ác / Siêng tu các hạnh lành / Giữ tâm mình thanh tịnh / Là lời chư Phật dạy.”",
            "Thân như bóng chớp có rồi không / Cây cỏ xuân tươi thu đượm hồng / Nhìn cuộc hưng vong đừng sợ hãi."
        ],
        correctAnswer: 2,
        explanation: "Bài kệ được ngài A-nan viện dẫn để chứng minh sự bao hàm toàn bộ giới, định, tuệ (37 đạo phẩm) trong Tăng Nhất A-hàm."
    },
    {
        question: "Câu 4: Tôn giả A-nan trả lời thế nào khi được Tôn giả Ca-diếp hỏi vì sao giao phó Tăng nhất A-hàm mà không trao truyền hết thảy các pháp?",
        options: [
            "Vì các bộ kinh khác đã có các vị đại đệ tử khác đảm nhiệm.",
            "“Tăng nhất A-hàm tức là các pháp, các pháp chính là Tăng nhất A-hàm, vốn chỉ là một mà không có hai.”",
            "Vì thời mạt pháp chúng sanh chỉ có khả năng thọ trì bộ kinh này.",
            "Vì Tăng nhất A-hàm chứa đựng những bí mật mà các kinh khác không có."
        ],
        correctAnswer: 1,
        explanation: "Câu trả lời mang tính triết học \"Bất nhị\" và tính bao trùm, khẳng định Tăng Nhất A-hàm đại diện trọn vẹn cho toàn bộ giáo pháp."
    },
    {
        question: "Câu 5: Trong Kinh Công Đức Niệm Phật, Đức Phật dạy phương pháp tu niệm Phật như thế nào?",
        options: [
            "Chuyên tâm trì tụng danh hiệu Phật A Di Đà để cầu vãng sanh.",
            "Xây dựng chùa chiền, đúc tượng Phật để tích lũy công đức.",
            "Hành giả kiết-già tĩnh tọa, buộc niệm một chỗ, nhất tâm quán tưởng và nhớ nghĩ công đức Như Lai: đầy đủ mười lực, bốn vô sở úy...",
            "Tụng đọc kinh điển hàng ngày và làm các việc từ thiện nhân đạo."
        ],
        correctAnswer: 2,
        explanation: "\"Niệm Phật\" trong A-hàm là pháp hành thiền quán, quán niệm ân đức/phẩm chất giác ngộ của Phật như Thập lực, Tứ vô sở úy..."
    },
    {
        question: "Câu 6: Trong Kinh Công Đức Niệm Pháp, Đức Phật dạy tu niệm Pháp như thế nào?",
        options: [
            "Học thuộc lòng tất cả các bộ kinh điển để tranh luận.",
            "Hành giả an trú chánh niệm, chuyên tâm niệm Pháp... Quán Chánh pháp là pháp đưa đến vô dục, xa lìa trói buộc và ngăn che, không bị loạn tưởng pha tạp.",
            "Sử dụng pháp thuật để giúp người đời thoát khỏi tai ương.",
            "Chép kinh và ấn tống kinh điển để cầu phước báu."
        ],
        correctAnswer: 1,
        explanation: "Niệm Pháp là hướng tâm và quán sát đặc tính \"ly dục, vô nhiệt, giải thoát\" của Chánh pháp, từ đó tâm hành giả cũng trở nên tịch tĩnh, xa lìa trói buộc."
    },
    {
        question: "Câu 7: Trong Kinh Công Đức Niệm Tăng, đối tượng \"Tăng\" mà hành giả hướng tâm đến có đặc điểm gì?",
        options: [
            "Là những vị có khả năng làm phép lạ và thay đổi số mệnh.",
            "Là những vị am hiểu kiến thức thế gian và giỏi biện luận.",
            "Hành giả chuyên tâm niệm Thánh chúng: thành tựu giới, định, tuệ, giải thoát và giải thoát tri kiến; gồm bốn đôi tám bậc; là ruộng phước của thế gian.",
            "Là những vị xuất thân từ dòng dõi quý tộc, giàu sang."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 8: Trong Kinh Công Đức Niệm Tịch Lặng, Đức Phật dạy cách tu như thế nào?",
        options: [
            "Hành giả kiết-già tĩnh tọa, buộc niệm một chỗ, chuyên niệm tịch lặng; dứt trừ nghĩ tưởng, tâm lắng trong, không vọng động.",
            "Đi vào rừng sâu và không tiếp xúc với bất kỳ ai để giữ tâm yên tĩnh.",
            "Thực hiện các nghi lễ cúng bái trong không gian yên ắng.",
            "Cố gắng không suy nghĩ về bất cứ điều gì bằng cách ép xác khổ hạnh."
        ],
        correctAnswer: 0
    },
    {
        question: "Câu 9: Trong Kinh Ưu-bà-di Dạy Con Trai, những hình mẫu chuẩn mực nào được người mẹ khuyên con noi theo?",
        options: [
            "Tại gia noi theo Cấp Cô Độc; Xuất gia noi theo Tỳ-kheo Nan-đà.",
            "Tại gia noi theo trưởng giả Chất-đa và đồng tử Tượng; Xuất gia noi theo Tỳ-kheo Xá-lợi-phất và Tỳ-kheo Mục-kiền-liên.",
            "Tại gia noi theo vua Ba-tư-nặc; Xuất gia noi theo Tỳ-kheo A-nan.",
            "Tại gia noi theo Duy-ma-cật; Xuất gia noi theo Tỳ-kheo Ca-diếp."
        ],
        correctAnswer: 1,
        explanation: "Chất-đa và Đồng tử Tượng là hai cư sĩ đệ nhất được Phật tán thán; Xá-lợi-phất và Mục-kiền-liên là hai thượng thủ Tăng. Đây là những vị chuẩn mực được nêu trong kinh."
    },
    {
        question: "Câu 10: Trong Kinh Ưu-bà-di Dạy Con Gái, những vị Thánh Ni và Nữ cư sĩ nào được nêu làm gương sáng?",
        options: [
            "Tại gia noi theo phu nhân Mạt-lợi; Xuất gia noi theo Tỳ-kheo-ni Liên Hoa Sắc.",
            "Tại gia noi theo Vi-đề-hy; Xuất gia noi theo Tỳ-kheo-ni Đại Ái Đạo.",
            "Nếu sống tại gia, noi theo ưu-bà-di Câu-thù-đa-la và Nan-đà Mẫu; Nếu xuất gia, noi theo Tỳ-kheo-ni Sấm-ma và Tỳ-kheo-ni Ưu-bát Hoa Sắc.",
            "Tại gia noi theo Lộc Tử Mẫu; Xuất gia noi theo Tỳ-kheo-ni Gia-du-đà-la."
        ],
        correctAnswer: 2,
        explanation: "Văn bản kinh Tăng Nhất A-hàm cụ thể nêu tên: Câu-thù-đa-la (đệ nhất đa văn cư sĩ nữ) và Nan-đà Mẫu (đệ nhất thiền định cư sĩ nữ); Sấm-ma (đệ nhất trí tuệ Ni) và Ưu-bát Hoa Sắc (đệ nhất thần thông Ni)."
    },
    {
        question: "Câu 11: Trong kinh Đạo Phẩm, ghi “Có một người mà khi xuất hiện ở đời liền có ba mươi bảy đạo phẩm xuất hiện ở đời”. Người ấy là ai?",
        options: [
            "Đó là vị Chuyển Luân Thánh Vương cai trị bốn châu thiên hạ.",
            "Đó là đức Như Lai, bậc A-la-hán Ðẳng Chánh Giác.",
            "Đó là vị Bồ-tát Di-lặc khi thành Phật ở tương lai.",
            "Đó là bậc Đại Sa-môn có thần thông bậc nhất."
        ],
        correctAnswer: 1,
        explanation: "Kinh văn xác định độc nhất: \"Có một người mà khi xuất hiện ở đời liền có ba mươi bảy đạo phẩm xuất hiện ở đời. Người ấy là ai? Đó là đức Như Lai, bậc A-la-hán Ðẳng Chánh Giác.\" Các vị khác dù vĩ đại nhưng không phải là nguồn gốc làm xuất hiện trọn vẹn 37 đạo phẩm."
    },
    {
        question: "Câu 12: Trong kinh Đạo Phẩm, Ba mươi bảy đạo phẩm là gì?",
        options: [
            "Đó là mười thiện nghiệp, sáu ba-la-mật và bát chánh đạo.",
            "Đó là bốn niệm xứ, bốn chánh đoạn, bốn thần túc, năm căn, năm lực, bảy giác chi, tám Thánh đạo.",
            "Đó là bốn thiền định, bốn vô lượng tâm và chín thứ lớp định.",
            "Đó là ngũ uẩn, thập nhị nhân duyên và bát chánh đạo."
        ],
        correctAnswer: 1,
        explanation: "Cần phân biệt chính xác thuật ngữ dùng trong bản kinh này (ví dụ dùng \"chánh đoạn\" thay vì \"chánh cần\", \"thần túc\" thay vì \"như ý túc\") ."
    },
    {
        question: "Câu 13: Trong kinh Mất Hẳn, cho biết “Nếu đức Như Lai không còn nơi cõi đời thì ba mươi bảy đạo phẩm cũng sẽ diệt tận.” Đức Phật dạy cần phải làm gì?",
        options: [
            "Phải nỗ lực xây dựng thật nhiều tự viện để lưu giữ chánh pháp.",
            "Phải luôn cung kính chư Phật.",
            "Phải học thuộc lòng tất cả các bộ kinh để không bị thất truyền.",
            "Phải phát nguyện tái sanh về các cõi tịnh độ của chư Phật."
        ],
        correctAnswer: 1,
        explanation: "Để đối trị sự diệt tận của chánh pháp khi Phật vắng bóng, kinh dạy hạnh cung kính chư Phật là nền tảng."
    },
    {
        question: "Câu 14: Trong kinh Tâm Nhanh Nhạy, Đức Phật dạy “người phàm phu thì khó có thể quán sát được tâm ý.” Vậy cần phải làm gì?",
        options: [
            "Phải mặc kệ tâm ý vì nó vốn không thực có.",
            "Phải tìm cách dập tắt mọi suy nghĩ ngay lập tức.",
            "phải luôn hàng phục tâm ý, khiến hướng theo đường lành.",
            "Phải dùng các loại thuốc để làm dịu thần kinh và tâm trí."
        ],
        correctAnswer: 2,
        explanation: "Đối với cái tâm nhanh nhạy khó bắt, giải pháp thực tiễn Đức Phật dạy là chủ động hàng phục và dẫn dắt nó về nẻo thiện (đường lành)."
    },
    {
        question: "Câu 15: Trong kinh Tâm Vô Thường, Đức Phật đã ví sự nhanh nhạy của tâm như thế nào?",
        options: [
            "Giống như dòng nước chảy xiết không bao giờ dừng lại.",
            "Giống như ngọn lửa bùng cháy khi gặp gió lớn.",
            "Giống như khỉ vượn, vừa buông cành này liền chụp cành kia, lòng không an định.",
            "Giống như bóng chớp trên trời, vừa thấy đó liền biến mất."
        ],
        correctAnswer: 2,
        explanation: "Hình ảnh so sánh trong kinh: \"Giống như khỉ vượn, vừa buông cành này liền chụp cành kia, lòng không an định. Tâm cũng như thế, niệm trước và niệm sau đã không giống nhau.\" Hình ảnh \"khỉ vượn chuyền cành\" minh họa cho sự phan duyên và biến đổi chớp nhoáng của tâm."
    },
    {
        question: "Câu 16: Trong kinh Đọa Lạc, Đức Phật dạy thế nào về một Người đọa vào địa ngục nhanh như khoảnh khắc co duỗi cánh tay, khi người ấy qua đời?",
        options: [
            "Vì lúc lâm chung người ấy còn tham luyến tài sản, vật chất.",
            "Vì lúc lâm chung người ấy khởi tâm tà kiến, bác bỏ nhân quả.",
            "Ngay lúc ôm tâm sân hận, người ấy qua đời, liền rơi vào địa ngục, bởi tâm hành xấu ác.",
            "Vì lúc lâm chung người ấy rơi vào trạng thái hôn trầm, vô minh."
        ],
        correctAnswer: 2,
        explanation: "Mặc dù tham và tà kiến đều nguy hiểm, nhưng kinh nhấn mạnh tâm sân hận (tâm hành xấu ác) lúc cận tử là lực đẩy trực tiếp xuống địa ngục nhanh nhất."
    },
    {
        question: "Câu 17: Trong kinh Sanh Thiên, Đức Phật dạy thế nào về một Người được sanh lên cõi trời nhanh như khoảnh khắc co duỗi cánh tay, khi người ấy qua đời?",
        options: [
            "Lúc khởi tâm thiện diệu, nếu người ấy qua đời, liền sanh lên cõi trời, nhờ tâm hành thiện diệu.",
            "Vì lúc còn sống người ấy đã làm rất nhiều việc bố thí đại quy mô.",
            "Vì người ấy có khả năng xuất hồn và đi đến các cõi trời bằng thần thông.",
            "Vì lúc lâm chung người ấy được nhiều người hộ niệm và cầu nguyện."
        ],
        correctAnswer: 0,
        explanation: "Tương ứng với chiều ác, tâm hành thiện diệu lúc lâm chung đưa người tái sanh thiên giới."
    },
    {
        question: "Câu 18: Trong kinh Dục Tưởng, Đức Phật dạy nếu tâm loạn tưởng thì khiến cho các tưởng dục, sân, thụy miên, trạo cử, nghi chưa sinh liền sinh khởi, đã khởi lại khiến tăng trưởng, vậy cần phải tu tập thế nào?",
        options: [
            "Phải tìm nơi thanh tịnh để tách biệt hoàn toàn với thế gian.",
            "Phải liên tục trì tụng các thần chú hộ thân.",
            "Chớ có loạn tưởng, phải luôn chánh niệm.",
            "Phải sử dụng các phương pháp quán tưởng hào quang để trấn áp tâm."
        ],
        correctAnswer: 2,
        explanation: "Loạn tưởng là gốc của triền cái, nên đối trị là chánh niệm (không loạn tưởng)."
    },
    {
        question: "Câu 19: Trong kinh Dục Tưởng, Đức Phật đã dạy pháp tu tập như thế nào khiến cho các tưởng dục, sân, thụy miên, trạo cử, nghi chưa sinh thì không sinh khởi, đã sinh khởi liền bị trừ diệt?",
        options: [
            "Phải luôn tu tập từ bi quán đối với tất cả chúng sanh.",
            "Phải luôn chuyên tâm quán tưởng bất tịnh.",
            "Phải thực hành thiền sổ tức (đếm hơi thở) liên tục.",
            "Phải nghiên cứu sâu sắc về giáo lý duyên khởi."
        ],
        correctAnswer: 1,
        explanation: "Kinh xác định Quán bất tịnh là pháp đặc hiệu nhất để chặn đứng dòng chảy của dục tưởng và 5 triền cái trong bối cảnh này."
    },
    {
        question: "Câu 20: Trong kinh Không Buông Lung, Hạnh không buông lung là gì?",
        options: [
            "Là sự siêng năng trong các công việc thường nhật.",
            "Là việc giữ gìn các hình thức oai nghi bên ngoài.",
            "Hạnh không buông lung, đó là phòng hộ tâm.",
            "Là việc không bao giờ ngủ nghỉ để dành thời gian tu tập."
        ],
        correctAnswer: 2,
        explanation: "Định nghĩa cụ thể của kinh về \"Không buông lung\" chính là phòng hộ tâm (ngăn ngừa lậu hoặc)."
    },
    {
        question: "Câu 21: Trong kinh Không Buông Lung, đã dạy pháp hộ Tâm như thế nào?",
        options: [
            "Luôn phòng hộ tâm hữu lậu, pháp hữu lậu; dục lậu, hữu lậu, vô minh lậu chưa sanh thì khiến không sanh, đã sanh liền khéo trừ diệt.",
            "Phải luôn giữ tâm hoan hỷ và không để ý đến bất cứ lỗi lầm nào của mình.",
            "Phải nhờ cậy vào sự che chở của các vị chư thiên để tâm được bình an.",
            "Phải học thật nhiều kiến thức để tâm không bị lừa dối bởi ngoại đạo."
        ],
        correctAnswer: 0,
        explanation: "Nội dung chi tiết: \"Luôn phòng hộ tâm hữu lậu, pháp hữu lậu,… tu tập hạnh không buông lung là phải luôn tự mình thận trọng; dục lậu, hữu lậu, vô minh lậu chưa sanh thì khiến không sanh, đã sanh liền khéo trừ diệt.\" Pháp hộ tâm cụ thể là thận trọng ngăn ngừa và trừ diệt ba loại lậu hoặc (dục, hữu, vô minh)."
    },
    {
        question: "Câu 22: Trong kinh Không Buông Bỏ Thiện Pháp, Thiện pháp ấy là gì?",
        options: [
            "Là các hành động cứu người, giúp đời và làm từ thiện xã hội.",
            "Đó là tám đạo phẩm của bậc Hiền thánh - chánh kiến, chánh tinh tấn, chánh ngữ, chánh nghiệp, chánh mạng, chánh tư duy, chánh niệm và chánh định.\"",
            "Là việc cúng dường hoa quả, hương đăng lên bàn thờ Phật.",
            "Là việc giữ gìn sự hòa thuận trong gia đình và xóm giềng."
        ],
        correctAnswer: 1,
        explanation: "Thiện pháp được định nghĩa là: \"Đó là tám đạo phẩm của bậc Hiền thánh, gồm có: Chánh kiến, chánh tinh tấn, chánh ngữ, chánh nghiệp, chánh mạng, chánh tư duy, chánh niệm và chánh định.\" Trong ngữ cảnh kinh này, \"Thiện pháp\" tối thắng được chỉ định là Tám đạo phẩm (Bát chánh đạo)."
    },
    {
        question: "Câu 23: Trong kinh Tạo Phước, Đức Phật đã dạy liên quan đến Phước và vô phước như thế nào?",
        options: [
            "Phước là có nhiều tiền tài; Vô phước là nghèo khổ, bệnh tật.",
            "Phước là được nhiều người khen ngợi; Vô phước là bị người đời chê cười.",
            "Báo ứng thọ lạc... gọi là phước; Nguồn gốc của các khổ... gọi là vô phước.",
            "Phước là thông minh tài giỏi; Vô phước là ngu si đần độn."
        ],
        correctAnswer: 2,
        explanation: "Định nghĩa dựa trên cảm thọ quả báo: \"Báo ứng thọ lạc rất được yêu kính. Đây gọi là phước... Nguồn gốc của các khổ, những thứ sầu, lo, khổ, não không thể tính kể, không được yêu thích. Ðây gọi là vô phước.\""
    },
    {
        question: "Câu 24: Trong kinh Ma Ba-tuần, Đức Phật dạy như thế nào liên quan đến Phước?",
        options: [
            "Phước báu như sương đầu cỏ, không bền lâu nên không cần tìm cầu.",
            "Có phước, an lạc; không phước, khổ sầu; đời này, đời sau, nhờ phước, an lạc.",
            "Chỉ cần có trí tuệ là đủ, phước báu chỉ là chuyện phụ đạo.",
            "Phước báu chỉ dành cho những người giàu có biết làm việc thiện."
        ],
        correctAnswer: 1,
        explanation: "Bài kệ trong tài liệu: \"Thế Tôn nói kệ rằng: Có phước, an lạc/ không phước, khổ sầu /đời này, đời sau /nhờ phước, an lạc.\""
    },
    {
        question: "Câu 25: Trong kinh Đường Dữ, Thế nào là tu hành một pháp mà không thể phá trừ đường dữ? và tu hành một pháp nào sẽ đến được nẻo thiện?",
        options: [
            "Tu tập mà không có trí tuệ và Tu tập có trí tuệ sâu sắc.",
            "Tâm không có niềm tin tha thiết và Tâm tu tập với niềm tin tha thiết.",
            "Tu tập mà không trì giới và Tu tập giữ giới thanh tịnh.",
            "Tu tập mà không thiền định và Tu tập đạt được định lực cao."
        ],
        correctAnswer: 1,
        explanation: "Yếu tố quyết định là niềm tin: \"Đó là tâm không có niềm tin tha thiết\" (không phá trừ đường dữ) và \"Tâm tu tập với niềm tin tha thiết\" (đến nẻo thiện). => Chìa khóa để chuyển từ đường dữ sang nẻo thiện ở đây là Niềm tin tha thiết (Tín lực)."
    },
    {
        question: "Câu 26: Trong kinh Đường Dữ, Thế nào là tu hành một pháp đến được Niết-bàn?",
        options: [
            "Đó là việc tích lũy công đức qua nhiều kiếp.",
            "Đó là việc thấu hiểu tất cả các triết lý cao siêu.",
            "Đó là luôn giữ chánh niệm.",
            "Đó là việc từ bỏ hết thảy tài sản và gia đình."
        ],
        correctAnswer: 2,
        explanation: "Chánh niệm là pháp độc nhất đưa đến Niết-bàn trong ngữ cảnh kinh này."
    },
    {
        question: "Câu 27: Trong kinh Niệm Xứ, lối vào đạo làm thanh tịnh chúng sanh, diệt trừ khổ ưu, chứng đắc Niết-bàn là gì?",
        options: [
            "Đó là thực hành sáu pháp ba-la-mật một cách trọn vẹn.",
            "Đó là phải diệt trừ năm sự ngăn che và tu tập bốn niệm xứ.",
            "Đó là việc chứng đắc các tầng thiền sắc giới và vô sắc giới.",
            "Đó là việc trì tụng kinh điển và tham gia các khóa tu tập trung."
        ],
        correctAnswer: 1,
        explanation: "Con đường độc nhất (Nhất nhập đạo): \"Đó là phải diệt trừ năm sự ngăn che và tu tập bốn niệm xứ.\" Đây là tôn chỉ của phẩm Nhất Nhập Đạo."
    },
    {
        question: "Câu 28: Trong kinh Niệm Xứ, dạy rằng Có một lối vào đạo, Một lối vào là gì? Và Đạo đó là gì?",
        options: [
            "Một lối là giữ giới; Đạo là con đường thoát khổ.",
            "Một lối là lòng thành kính; Đạo là con đường giác ngộ.",
            "Một lối là tâm chuyên nhất; Đạo là tám đạo phẩm của Hiền thánh.",
            "Một lối là sự khiêm hạ; Đạo là pháp môn vô vi."
        ],
        correctAnswer: 2,
        explanation: "Kinh định nghĩa cụ thể: \"Một lối là tâm chuyên nhất\" và \"Đạo là tám đạo phẩm của Hiền thánh...\" (Bát chánh đạo). Lối vào = Tâm chuyên nhất; Đạo = Bát chánh đạo."
    },
    {
        question: "Câu 29: Trong kinh Niệm Xứ, \"diệt trừ năm sự ngăn che\" là diệt trừ nhóm phiền não nào?",
        options: [
            "Tham dục, Sân hận, Trạo cử, Thụy miên và Nghi ngờ (Ngũ triền cái).",
            "Kiêu mạn, Tự phụ, Đố kỵ, Ganh ghét và Bủn xỉn.",
            "Sắc dục, Tiền tài, Danh vọng, Ăn uống và Ngủ nghỉ.",
            "Thân kiến, Nghi, Giới cấm thủ, Tham dục và Sân hận."
        ],
        correctAnswer: 0,
        explanation: "Năm sự ngăn che (Ngũ triền cái) gồm: \"Diệt trừ sự ngăn che của tham dục, sân hận, trạo cử, thụy miên và nghi ngờ.\""
    },
    {
        question: "Câu 30: Trong kinh Niệm Xứ, thế nào là tu tập bốn niệm xứ?",
        options: [
            "Quán thân bất tịnh, quán thọ thị khổ, quán tâm vô thường, quán pháp vô ngã.",
            "Quán thân nơi thân; quán thọ nơi thọ; quán tâm nơi tâm; quán pháp nơi pháp.",
            "Niệm Phật, niệm Pháp, niệm Tăng, niệm Giới.",
            "Quán ngũ uẩn, quán lục nhập, quán thập nhị nhân duyên, quán tứ đế."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 31: Trong kinh Niệm Xứ, tu bảy giác chi trong phần quán niệm xứ pháp nơi pháp là những pháp nào?",
        options: [
            "Niệm, Định, Tuệ, Tấn, Hỷ, Khinh an, Xả giác chi.",
            "Tín, Tấn, Niệm, Định, Tuệ, Trạch pháp, Hỷ giác chi.",
            "Tu niệm giác chi, trạch pháp giác chi, tinh tấn giác chi, hỷ giác chi, khinh an giác chi, định giác chi, xả giác chi.",
            "Chánh kiến, Chánh tư duy, Chánh ngữ, Chánh nghiệp, Chánh mạng, Chánh tấn, Chánh niệm giác chi."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 32: Trong kinh Ganh ghét và Đố kỵ, Đức Phật dạy thế nào để diệt trừ được tâm ganh ghét và đố kỵ?",
        options: [
            "Phải nỗ lực làm việc để giỏi hơn người mình đang ganh ghét.",
            "Phải tu tập từ bi và nhẫn nhục, thân hành từ, miệng hành từ, ý hành từ.",
            "Phải tránh xa những người có thành tựu hơn mình để tâm được bình an.",
            "Phải cầu xin chư Phật gia hộ để loại bỏ những suy nghĩ tiêu cực."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 33: Trong kinh Kẻ Đi Tìm Con, Đức Phật dạy lẽ thường ở thế gian thế nào?",
        options: [
            "Mọi sự đều do sự sắp đặt của một đấng tối cao.",
            "Thế gian là cõi tạm, không có gì là thực sự tồn tại.",
            "Sanh, già, bệnh, chết là lẽ thường... Thương yêu chia lìa là khổ, oán ghét gặp nhau là khổ.",
            "Hạnh phúc là mục tiêu duy nhất mà con người nên tìm kiếm."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 34: Trong kinh Đế-thích Thăm Bệnh, khi được hỏi “thân bệnh này là từ đâu sanh? Từ thân sanh hay từ ý sanh?” Tôn giả Tu-bồ-đề đã trả lời thế nào?",
        options: [
            "Thân bệnh là do nghiệp từ kiếp trước sinh ra.",
            "Thân bệnh là do môi trường bên ngoài và thức ăn không sạch.",
            "Pháp pháp tự sanh, pháp pháp tự diệt... pháp có thể sanh ra pháp, pháp có thể diệt trừ pháp.",
            "Thân bệnh hoàn toàn là do ảo tưởng của tâm ý tạo nên."
        ],
        correctAnswer: 2,
        explanation: "Câu trả lời dựa trên nguyên lý Duyên khởi và Vô ngã của các pháp. \"Pháp pháp tự sanh, pháp pháp tự diệt, pháp pháp tác động qua lại... pháp có thể sanh ra pháp, pháp có thể diệt trừ pháp.\""
    },
    {
        question: "Câu 35: Trong kinh Xả Bỏ Hai Kiến, Hai kiến chấp là gì? Thế nào là chấp có? Thế nào là chấp không?",
        options: [
            "Chấp có là chấp vào cái tôi; Chấp không là chấp vào hư vô.",
            "Đó là chấp có và chấp không. Chấp có là chấp thực có cõi dục, cõi sắc và cõi vô sắc. Chấp không là cái thấy liên hệ sáu mươi hai loại kiến chấp.",
            "Chấp có là tin vào kiếp sau; Chấp không là không tin vào kiếp sau.",
            "Chấp có là đắm say vật chất; Chấp không là bỏ bê cuộc đời."
        ],
        correctAnswer: 1,
        explanation: "Hai kiến chấp căn bản: \"Đó là chấp có và chấp không. Chấp có là chấp thực có cõi dục... Chấp không là cái thấy liên hệ sáu mươi hai loại kiến chấp.\""
    },
    {
        question: "Câu 36: Trong kinh Xả Bỏ Hai Kiến, Thế nào là chấp thật có cõi dục?",
        options: [
            "Là mong muốn được sinh làm vua chúa, lãnh đạo.",
            "Là việc tích trữ thật nhiều tiền bạc và đất đai.",
            "Đắm nhiễm vào năm Dục. Đó là Sắc mà mắt nhìn thấy, tai nghe tiếng, mũi ngửi mùi, lưỡi nếm vị, thân xúc chạm, rất đáng yêu đáng nhớ.",
            "Là sự say mê nghiên cứu các kiến thức khoa học và nghệ thuật."
        ],
        correctAnswer: 2,
        explanation: "Biểu hiện của chấp có cõi dục: Đó là năm Dục. Sắc mà mắt nhìn thấy, tai nghe tiếng, mũi ngửi mùi, lưỡi nếm vị, thân xúc chạm, rất đáng yêu đáng nhớ. Chấp cõi dục biểu hiện qua sự đắm nhiễm Năm dục (ngũ dục trưởng dưỡng)."
    },
    {
        question: "Câu 37: Trong kinh Hai Tướng, Đức Phật dạy biểu hiện hai tướng của người ngu và người trí khác nhau ở điểm nào?",
        options: [
            "Người ngu thì nghèo khó, người trí thì giàu sang.",
            "Người ngu làm việc không được phép, bỏ việc cần làm; Người Trí thì việc không được phép làm, sẽ không làm; những việc cần làm thì không bao giờ chán bỏ.",
            "Người ngu thì ít học, người trí thì am hiểu nhiều thứ.",
            "Người ngu thường gặp rủi ro, người trí thường gặp may mắn."
        ],
        correctAnswer: 1,
        explanation: "Tiêu chuẩn phân biệt nằm ở hành động đối với điều nên làm (thiện pháp) và điều không nên làm (ác pháp). Người ngu thì với những việc không được phép làm, nhưng vẫn cố làm; những việc cần làm thì lại chán bỏ; Người có Trí thì ngược lại."
    },
    {
        question: "Câu 38: Trong kinh Chánh Kiến, Đức Phật dạy hai nhân duyên nào để phát sinh Chánh kiến?",
        options: [
            "Tự mình nghiên cứu và trải nghiệm thực tế cuộc sống.",
            "Lãnh thụ sự giáo hóa (nghe pháp) và tư duy pháp chỉ quán (như lý tác ý).",
            "Sống trong môi trường đạo đức và làm nhiều việc thiện.",
            "Khổ công thiền định và đạt được thần thông thấy rõ quá khứ."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 39: Trong kinh Pháp Soi Sáng, \"Soi sáng\" là gì và \"Pháp\" là gì?",
        options: [
            "Soi sáng là nhìn thấu tương lai; Pháp là những lời dạy của Phật.",
            "Soi sáng là đạt được hào quang; Pháp là các nghi lễ tôn giáo.",
            "Soi sáng là dứt sạch tham sân si; Pháp là Bát chánh đạo.",
            "Soi sáng là hiểu biết vạn vật; Pháp là quy luật tự nhiên."
        ],
        correctAnswer: 2,
        explanation: "Trong kinh định nghĩa: \"Soi sáng là tham dâm, sân hận và ngu si đã hoàn toàn dứt sạch. Pháp để hành trì soi sáng là chánh kiến, chánh tư duy... (Bát chánh đạo).\""
    },
    {
        question: "Câu 40: Trong kinh Hai Lực, Đức Phật cho biết hai sức mạnh nào giúp thành tựu Vô Thượng Chánh Đẳng Chánh Giác?",
        options: [
            "Từ bi lực và Trí tuệ lực.",
            "Định lực và Tấn lực.",
            "Nhẫn lực và Tư duy lực.",
            "Tín lực và Giới lực."
        ],
        correctAnswer: 2,
        explanation: "Hai sức mạnh cốt lõi được nhắc đến trong kinh là Nhẫn lực (khả năng kham nhẫn) và Tư duy lực (khả năng quán chiếu)."
    },
    {
        question: "Câu 41: Trong kinh Sát sanh và Không sát sanh, Đức Phật dạy quả báo tương phản giữa hai hành động này là gì?",
        options: [
            "Sát sanh bị người đời xa lánh; không sát sanh được mọi người quý mến.",
            "Sát sanh đưa đến đọa ác đạo, nếu làm người thì yểu mệnh; không sát sanh đem lại thọ mạng dài lâu, phước cõi người, cõi trời và hướng đến Niết-bàn.",
            "Sát sanh sẽ bị nghèo khổ; không sát sanh sẽ được giàu sang.",
            "Sát sanh làm tâm trí u mê; không sát sanh làm tâm trí sáng suốt."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 42: Trong kinh Trộm cướp và Bố thí, Đức Phật liên kết hành vi và quả báo tương ứng ra sao?",
        options: [
            "Trộm cướp bị pháp luật trừng trị; bố thí được xã hội tôn vinh.",
            "Trộm cướp khiến gia đình tan nát; bố thí giúp gia đình hòa thuận.",
            "Trộm cướp đưa đến ác đạo, làm người thì nghèo khổ; bố thí đem lại phước báo lớn, đời này an vui, đời sau sanh thiện thú và có khả năng chứng Niết-bàn.",
            "Trộm cướp bị đọa vào ngạ quỷ; bố thí được sanh làm Atula."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu 43: Trong kinh Tà dâm và Không tà dâm, hậu quả xã hội và tâm linh của tà dâm được mô tả là gì?",
        options: [
            "Tà dâm làm tổn hại sức khỏe; không tà dâm làm thân thể tráng kiện.",
            "Tà dâm đưa đến đọa lạc, làm người thì bị khinh chê, sống trong môi trường dâm loạn; không tà dâm đem lại phước báo, đời sống thanh tịnh và hướng đến giải thoát.",
            "Tà dâm bị mất uy tín; không tà dâm được mọi người tin cậy.",
            "Tà dâm sanh làm súc sanh; không tà dâm sanh làm người giàu có."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 44: Trong kinh Nói dối và Không nói dối, giá trị cốt lõi của sự chân thật được Đức Phật khẳng định là gì?",
        options: [
            "Nói dối giúp giải quyết vấn đề tạm thời; chân thật làm hỏng việc.",
            "Nói dối đưa đến ác đạo, làm người bị chán ghét; không nói dối đem lại tiếng tốt, phước báo và là nền tảng để chứng Niết-bàn.",
            "Nói dối bị mất trí nhớ; chân thật giúp trí não minh mẫn.",
            "Nói dối sanh làm người câm; chân thật sanh làm người có giọng nói hay."
        ],
        correctAnswer: 1
    },
    {
        question: "Câu 45: Trong kinh Uống rượu và Không uống rượu, tác hại nguy hiểm nhất của rượu đối với lộ trình giác ngộ là gì?",
        options: [
            "Gây tốn kém tiền bạc và dễ gây ra tai nạn giao thông.",
            "Làm hại các cơ quan nội tạng và dẫn đến bệnh tật.",
            "Khiến người đời chê cười và gia đình bất hòa.",
            "Uống rượu khiến đọa lạc, làm người thì ngu si, mất chánh niệm; không uống rượu giúp trí tuệ sáng suốt, phước báo tăng trưởng và hướng đến Niết-bàn."
        ],
        correctAnswer: 3,
        explanation: "Rượu là nhân của Si mê (Vô minh). Tác hại lớn nhất về mặt tâm linh là làm mất chánh niệm và trí tuệ (ngu si), chướng ngại trực tiếp con đường giải thoát."
    }
];

let userAnswers = [];
let answeredQuestions = [];

function initQuiz() {
    const totalQuestionsEl = document.getElementById('totalQuestions');
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = quizData.length;
    }
    
    userAnswers = new Array(quizData.length).fill(null);
    answeredQuestions = new Array(quizData.length).fill(false);

    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) progressBar.parentElement.style.display = 'none';
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    // Hiển thị toàn bộ câu hỏi ra màn hình
    renderAllQuestions();
    
    // Chỉ hiển thị nút Nộp Bài (Finish) ở cuối trang
    const finishBtn = document.getElementById('finishBtn');
    if (finishBtn) finishBtn.style.display = 'block';
}

function renderAllQuestions() {
    const quizContainer = document.querySelector('.quiz-container');
    const buttonGroup = document.querySelector('.button-group');

    // Ẩn các phần tử HTML phục vụ cho việc hiển thị 1 câu hỏi/lần của giao diện cũ
    const oldQuestionText = document.getElementById('questionText');
    const oldOptionsContainer = document.getElementById('optionsContainer');
    const oldResultSection = document.getElementById('resultSection');
    
    if (oldQuestionText) oldQuestionText.style.display = 'none';
    if (oldOptionsContainer) oldOptionsContainer.style.display = 'none';
    if (oldResultSection) oldResultSection.style.display = 'none';

    // Tạo một khung chứa (container) mới cho toàn bộ danh sách câu hỏi
    let allQuestionsContainer = document.getElementById('all-questions-container');
    if (!allQuestionsContainer) {
        allQuestionsContainer = document.createElement('div');
        allQuestionsContainer.id = 'all-questions-container';
        // Chèn danh sách câu hỏi vào trước cụm nút bấm
        quizContainer.insertBefore(allQuestionsContainer, buttonGroup);
    } else {
        allQuestionsContainer.innerHTML = ''; // Làm sạch khi nhấn "Làm lại"
    }

    let questionsHTML = '';
    // Vòng lặp duyệt qua tất cả các câu hỏi để tạo HTML
    quizData.forEach((question, qIndex) => {
        questionsHTML += `
            <div class="question-block" id="question-block-${qIndex}" style="margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px dashed #ddd;">
                <div class="question-text" style="color: var(--primary-color); font-size: 1.2em; margin-bottom: 20px; font-weight: bold;">
                    ${question.question}
                </div>
                <div class="options-container" id="options-${qIndex}" style="display: flex; flex-direction: column; gap: 12px;">
        `;
        
        question.options.forEach((option, oIndex) => {
            questionsHTML += `
                    <div class="option" id="option-${qIndex}-${oIndex}" onclick="selectAnswer(${qIndex}, ${oIndex})">
                        <span class="option-letter">${String.fromCharCode(65 + oIndex)}</span>
                        <span>${option}</span>
                    </div>
            `;
        });

        questionsHTML += `
                </div>
                <div class="result-section" id="result-${qIndex}" style="display: none; margin-top: 20px; padding: 15px; border-radius: 8px;">
                    <div id="result-message-${qIndex}" class="result-message" style="font-weight: bold; margin-bottom: 10px;"></div>
                    <div id="correct-answer-${qIndex}" class="correct-answer" style="background-color: #e8f4f8; border-left: 4px solid var(--primary-color); padding: 15px; border-radius: 5px;"></div>
                </div>
            </div>
        `;
    });

    allQuestionsContainer.innerHTML = questionsHTML;
}

function selectAnswer(qIndex, oIndex) {
    if (answeredQuestions[qIndex]) return; // Nếu câu hỏi đã được chọn đáp án thì bỏ qua

    answeredQuestions[qIndex] = true;
    userAnswers[qIndex] = oIndex; // Lưu lại đáp án người dùng chọn

    const correctAnswer = quizData[qIndex].correctAnswer;
    const optionsContainer = document.getElementById(`options-${qIndex}`);
    const options = optionsContainer.querySelectorAll('.option');

    // Đổi màu đáp án
    options.forEach((option, idx) => {
        option.classList.add('disabled');
        if (idx === correctAnswer) {
            option.classList.add('correct');
        }
        if (idx === oIndex && idx !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });

    showResultForQuestion(qIndex, oIndex === correctAnswer);
}

function showResultForQuestion(qIndex, isCorrect) {
    const resultSection = document.getElementById(`result-${qIndex}`);
    const resultMessage = document.getElementById(`result-message-${qIndex}`);
    const correctAnswerDisplay = document.getElementById(`correct-answer-${qIndex}`);
    const question = quizData[qIndex];

    resultSection.style.display = 'block';

    // Hiển thị thông báo đúng/sai ngay bên dưới câu hỏi
    if (isCorrect) {
        resultMessage.textContent = '✅ Chính xác!';
        resultSection.style.backgroundColor = '#d5f4e6';
        resultMessage.style.color = 'var(--success-color)';
    } else {
        resultMessage.textContent = '❌ Sai rồi!';
        resultSection.style.backgroundColor = '#fadbd8';
        resultMessage.style.color = 'var(--error-color)';
    }

    const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
    const correctAnswerText = question.options[question.correctAnswer];

    let displayHTML = `
        <strong>Đáp án đúng:</strong> <strong>${correctAnswerLetter}. ${correctAnswerText}</strong>
    `;

    // Nếu có giải thích thì hiển thị thêm khung giải thích
    if (question.explanation) {
        displayHTML += `
            <div class="explanation-box" style="margin-top: 15px; padding: 10px; background-color: white; border-left: 4px solid var(--warning-color); border-radius: 4px;">
                <strong>Giải thích:</strong> ${question.explanation}
            </div>
        `;
    }

    correctAnswerDisplay.innerHTML = displayHTML;
}

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

    const correctCountEl = document.getElementById('correctCount');
    const totalCountEl = document.getElementById('totalCount');
    const scorePercentageEl = document.getElementById('scorePercentage');

    if(correctCountEl) correctCountEl.textContent = correctCount;
    if(totalCountEl) totalCountEl.textContent = quizData.length;
    if(scorePercentageEl) scorePercentageEl.textContent = percentage + '%';

    displayAnswerReview(correctCount);
}

function displayAnswerReview(correctCount) {
    const answerReview = document.getElementById('answerReview');
    if(!answerReview) return;
    answerReview.innerHTML = '';

    quizData.forEach((question, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = userAnswer === question.correctAnswer;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
        const correctAnswerText = question.options[question.correctAnswer];

        let userAnswerHTML = '';
        if (userAnswer !== null && userAnswer !== undefined) {
            const questionLetter = String.fromCharCode(65 + userAnswer);
            const userAnswerText = question.options[userAnswer];
            userAnswerHTML = `<strong>Trả lời của bạn:</strong> ${questionLetter}. ${userAnswerText}<br>`;
        } else {
             userAnswerHTML = `<strong>Trả lời của bạn:</strong> <span style="color: #999;">Chưa trả lời</span><br>`;
        }

        reviewItem.innerHTML = `
            <div class="review-question">${idx + 1}. ${question.question}</div>
            <div class="review-answer">
                ${userAnswerHTML}
                ${isCorrect ? '<strong style="color: var(--success-color);">✅ Đúng!</strong>' : `<strong style="color: var(--error-color);">❌ Sai!</strong><br><strong>Đáp án đúng:</strong> ${correctAnswerLetter}. ${correctAnswerText}`}
            </div>
        `;

        answerReview.appendChild(reviewItem);
    });
}

function restartQuiz() {
    document.querySelector('.quiz-container').style.display = 'block';
    const finalScore = document.getElementById('finalScore');
    if(finalScore) finalScore.style.display = 'none';

    initQuiz();
    window.scrollTo(0, 0);
}

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const finishBtn = document.getElementById('finishBtn');
const restartBtn = document.getElementById('restartBtn');

if(nextBtn) nextBtn.replaceWith(nextBtn.cloneNode(true));
if(prevBtn) prevBtn.replaceWith(prevBtn.cloneNode(true));

if(finishBtn) {
    const newFinishBtn = finishBtn.cloneNode(true);
    finishBtn.replaceWith(newFinishBtn);
    newFinishBtn.addEventListener('click', finishQuiz);
}
if(restartBtn) {
    const newRestartBtn = restartBtn.cloneNode(true);
    restartBtn.replaceWith(newRestartBtn);
    newRestartBtn.addEventListener('click', restartQuiz);
}

// Khởi chạy Quiz khi web tải xong
window.onload = initQuiz;
