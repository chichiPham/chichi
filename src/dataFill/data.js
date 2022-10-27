

const pricingServiceData = [
    {
        id: 1,
        planName: 'Gói Tiết Kiệm',
        price: 1000
        , content: [
            'Gợi ý lịch trình chuyển nhà',
            'Các thủ tục hành chính',
            'Đề xuất nhà miễn phí',
            'Theo dõi hoạt động hiện tại'
        ], btnClass: 'btn-outline-primary'
        , btnTitle: "ĐĂNG KÝ"
    },
    {
        id: 2,
        planName: 'Gói Hợp Lý',
        price: 2500
        , content: [
            'Tự động xuất giấy tờ cần thiết cho chuyển nhà',
            'Đề xuất dịch vụ chuyển nhà phù hợp',
            'Gợi ý lịch trình chuyển nhà',
            'Các thủ tục hành chính',
            'Đề xuất nhà miễn phí',
            'Theo dõi hoạt động hiện tại',
            'Nhận email thông báo'
        ], btnClass: 'btn-primary'
        , btnTitle: "CHUYỂN NGAY"
    },
    {
        id: 3,
        planName: 'Gói VIP',
        price: 100000
        , content: [
            'Ủy quyền và chúng tôi thực hiện tất cả thay bạn',
            'Tư vấn online đến khi thuê được nhà vừa ý',
            'Tư vấn và đăng ký dịch vụ chuyển đồ',
            'Theo dõi hoạt động chuyển nhà trực tuyến',
            'Yêu cầu khác nếu có',
            'Nhận email thông báo'
        ]
        , btnClass: 'btn-outline-primary'
        , btnTitle: "NHẬN TƯ VẤN NGAY"
    },

]
const plan=[
    { id: 1, name: "Gói Tiết Kiệm",value:1},
    { id: 2, name: 'Gói Hợp Lý',value:2},
    { id: 3, name: 'Gói VIP', value:3},
]
const city = [

    { id: 1, name: "01  北海道  Hokkaido",value:'Hokkaido' },
    { id: 2, name: '02	青森県	Aomori ',value:'Aomori' },
    { id: 3, name: '03	岩手県	Iwate', value:'Iwate'},
    { id: 4, name: ' 04	宮城県	Miyagi', value:'Miyagi'},
    { id: 5, name: '05	秋田県	Akita', value:'Akita'},
    { id: 6, name: '06	山形県	Yamagata ', value:'Yamagata'},
    { id: 7, name: ' 07	福島県	Fukushima ', value:'Fukushima'},
    { id: 8, name: '  08	茨城県	Ibaraki ', value:'Ibaraki'},
    { id: 9, name: '  09	栃木県	Tochigi ', value:'Tochigi'},
    { id: 10, name: ' 10	群馬県	Gunma ', value:'Gunma'},
    { id: 11, name: '11	埼玉県	Saitama ', value:'Saitama'},
    { id: 12, name: ' 12	千葉県	Chiba ', value:'Chiba'},
    { id: 13, name: '  13	東京都	Tokyo', value:'Tokyo'},
    { id: 14, name: ' 14	神奈川県  Kanagawa ',value:'Kanagawa' },
    { id: 15, name: '15	新潟県	Niigata ', value:'Niigata'},
    { id: 16, name: ' 16	富山県	Toyama ',value:'Toyama' },
    { id: 17, name: '   17	石川県	Ishikawa ', value:'Ishikawa'},
    { id: 18, name: '  18	福井県	Fukui ', value:'Fukui'},
    { id: 19, name: ' 19	山梨県	Yamanashi ', value:'Yamanashi'},
    { id: 20, name: '  20	長野県	Nagano ', value:'Nagano'},
    { id: 21, name: '21	岐阜県	Gifu ', value:'Gifu'},
    { id: 22, name: '22	静岡県	Shizuoka ', value:'Shizuoka'},
    { id: 23, name: '   23	愛知県	Aichi ', value:'Aichi'},
    { id: 24, name: '   24	三重県	Mie ', value:'Mie'},
    { id: 25, name: ' 25	滋賀県	Shiga ', value:'Shiga'},
    { id: 26, name: '  26	京都府	Kyoto ',value:'Kyoto' },
    { id: 27, name: '    27	大阪府	Osaka ',value:'Osaka' },
    { id: 28, name: '    28	兵庫県	Hyogo ',value:'Hyogo' },
    { id: 29, name: '    29	奈良県	Nara ',value:'Nara' },
    { id: 30, name: '   30	和歌山県  Wakayama ',value:'Wakayama' },
    { id: 31, name: '    31	鳥取県	Tottori ',value:'Tottori' },
    { id: 32, name: '    32	島根県	Shimane ',value:'Shimane' },
    { id: 33, name: '    33	岡山県	Okayama ',value:'Okayama' },
    { id: 34, name: '    34	広島県	Hiroshima ', value:'Hiroshima'},
    { id: 35, name: '   35	山口県	Yamaguchi ', value:'Yamaguchi'},
    { id: 36, name: '    36	徳島県	Tokushima ',value:'Tokushima' },
    { id: 37, name: '    37	香川県	Kagawa', value:'Kagawa'},
    { id: 38, name: '    38	愛媛県	Ehime', value:'Ehime'},
    { id: 39, name: '    39	高知県	Kochi ', value:'Kochi'},
    { id: 40, name: '    40	福岡県	Fukuoka ', value:'Fukuoka'},
    { id: 41, name: '    41	佐賀県	Saga ', value:'Saga'},
    { id: 42, name: '    42	長崎県	Nagasaki ', value:'Nagasaki'},
    { id: 43, name: '    43	熊本県	Kumamoto ', value:'Kumamoto'},
    { id: 44, name: '    44	大分県	Oita ', value:'Oita'},
    { id: 45, name: '    45	宮崎県	Miyazaki ', value:'Miyazaki'},
    { id: 46, name: '    46	鹿児島県  Kagoshima ', value:'Kagoshima'},
    { id: 47, name: '47	沖縄県	Okinawa', value:'Okinawa'},

]

export { city, plan,pricingServiceData }
