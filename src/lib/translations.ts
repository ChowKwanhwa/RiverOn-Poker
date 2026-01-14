export type Language = 'en' | 'kr' | 'cn';

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            schedule: 'Game Schedule',
            rules: 'Rules',
            contact: 'Contact',
            reserve: 'RESERVE',
            reserveSeat: 'RESERVE A SEAT'
        },
        hero: {
            title: 'RiverOn Poker Bangkok',
            subtitle: 'Experience luxury gaming in the heart of Bangkok.',
            subtitle2: 'Private tables. Professional dealers. 24/7 Action.',
            premier: 'The Premier Experience',
            book: 'Book Your Seat',
            contactUs: 'Contact Us'
        },
        about: {
            title: 'About',
            brand: 'RiverOn Poker Bangkok',
            p1: 'RiverOn Poker Bangkok is a premium offline poker club located in the heart of Bangkok, designed exclusively for international players seeking a high-quality live poker experience.',
            p2: 'Our goal is to bring together players from around the world in a comfortable, fair, and professionally managed environment. RiverOn Poker Bangkok offers a refined atmosphere where both casual and experienced players can enjoy the game with confidence.',
            features: {
                safe: {
                    title: 'Safe & Secure',
                    desc: 'Professional security team and fair play guaranteed at high standards.'
                },
                transfer: {
                    title: 'VIP Transfer',
                    desc: 'Complimentary luxury pick-up service for verified VIP players.'
                },
                fb: {
                    title: 'F&B & Parking',
                    desc: 'Complimentary food, drinks, and free parking provided for all guests.'
                },
                insurance: {
                    title: 'Insurance Rules',
                    desc: 'Optional feature to reduce variance in all-in situations for players.'
                }
            }
        },
        reservation: {
            title: 'Reserve Your Seat',
            subtitle: 'Experience privacy and luxury. VIP transport and accommodation arrangements available for verified players.',
            fullName: 'Full Name',
            fullNamePlaceholder: 'Enter your name',
            phone: 'Phone Number',
            phonePlaceholder: '+66',
            passport: 'Passport Number',
            passportPlaceholder: 'Required for secure verification',
            passportPhoto: 'Passport Photo (Optional)',
            passportPhotoNotice: 'Format: JPG, PNG. Max size: 5MB.',
            contactApp: 'Contact App',
            contactAppPlaceholder: 'Select App (Optional)',
            appId: 'App ID / Username',
            appIdPlaceholder: '@username (Optional)',
            arrivalDate: 'Arrival Date',
            arrivalTime: 'Time',
            confirm: 'Confirm Reservation',
            processing: 'Processing Request...',
            successTitle: 'Reservation Received',
            successMessage: 'We will contact you shortly.',
            another: 'Make another reservation',
            errorRequired: 'Please fill in all required fields.'
        },
        games: {
            title: 'Daily Schedule',
            startTime: 'Start Time: 8:00 PM Daily',
            threeGames: 'Three games with different blind levels run simultaneously.',
            table1: {
                name: 'Table 1: Low Blinds',
                desc: 'Perfect for casual players and local enthusiasts.'
            },
            table2: {
                name: 'Table 2: Mid Blinds',
                desc: 'Competitive action with higher stakes and experienced players.'
            },
            table3: {
                name: 'Table 3: High Blinds',
                desc: 'The ultimate high-stakes experience for professional players.'
            }
        },
        rules: {
            title: 'Insurance & Special Rules',
            insurance: {
                title: 'Poker Insurance',
                desc: 'An optional feature to reduce variance in all-in situations. Secure part of the pot in advance when you are statistically ahead.',
                bullet1: 'Reduces variance in large pots',
                bullet2: 'Available in all-in situations before river',
                bullet3: 'Guaranteed payout based on equity'
            },
            squid: {
                title: 'Squid Game Rules',
                c1: 'Challenge 1: The 7-2 Incentive',
                c1Desc: 'Winning a hand with 7-2 offsuit (hole cards) earns an immediate bounty from every active player at the table.',
                c2: 'Challenge 2: Stand-Up Game',
                c2Desc: 'The "Squid" is the last player to win a pot. Survivors "sit down" after winning; the last one standing pays a table penalty.',
                c3: 'Challenge 3: The Squid Pot',
                c3Desc: 'A progressive mystery jackpot triggered by specific high-hand milestones or bad-beat scenarios.'
            }
        },
        contact: {
            title: 'Join the Action',
            subtitle: 'Visit our premium lounge in the heart of Bangkok or reach out via social apps.',
            address: '88 Soi Sukhumvit 19, Bangkok',
            fullAddress: 'Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand',
            lineLabel: 'Add us on LINE',
            telegramLabel: 'Contact on Telegram',
            openHours: 'Open Daily',
            gameStart: '24 Hours Action',
            googleMaps: 'Open in Google Maps'
        }
    },
    kr: {
        nav: {
            home: '홈',
            about: '정보',
            schedule: '게임 일정',
            rules: '규칙',
            contact: '문의',
            reserve: '예약하기',
            reserveSeat: '좌석 예약'
        },
        hero: {
            title: '리버온 포커 방콕',
            subtitle: '방콕 중심부에서 프리미엄 게이밍을 경험하세요.',
            subtitle2: '프라이빗 테이블. 전문 딜러. 24/7 액션.',
            premier: '최고의 경험',
            book: '좌석 예약하기',
            contactUs: '문의하기'
        },
        about: {
            title: '소개',
            brand: '리버온 포커 방콕',
            p1: '리버온 포커 방콕은 방콕 중심부에 위치한 프리미엄 오프라인 포커 클럽으로, 고품질 라이브 포커 경험을 원하는 국제 플레이어들을 위해 특별히 설계되었습니다.',
            p2: '우리의 목표는 전 세계 플레이어들이 편안하고 공정하며 전문적으로 관리되는 환경에서 함께 게임을 즐기는 것입니다. 리버온 포커 방콕은 초보자와 숙련된 플레이어 모두가 안심하고 게임을 즐길 수 있는 세련된 분위기를 제공합니다.',
            features: {
                safe: {
                    title: '안전 및 보안',
                    desc: '전문 보안 팀과 높은 수준의 페어플레이가 보장됩니다.'
                },
                transfer: {
                    title: 'VIP 픽업',
                    desc: '검증된 VIP 플레이어를 위한 무료 럭셔리 픽업 서비스.'
                },
                fb: {
                    title: '식음료 및 주차',
                    desc: '모든 플레이어에게 무료 식음료 및 주차가 제공됩니다.'
                },
                insurance: {
                    title: '보험 규칙',
                    desc: '올인 상황에서 변동성을 줄이기 위한 선택적 기능입니다.'
                }
            }
        },
        reservation: {
            title: '좌석 예약',
            subtitle: '프라이버시와 럭셔리를 경험하세요. 검증된 플레이어에게는 VIP 이동 및 숙박 예약 서비스가 제공됩니다.',
            fullName: '이름',
            fullNamePlaceholder: '이름을 입력하세요',
            phone: '전화번호',
            phonePlaceholder: '+66',
            passport: '여권 번호',
            passportPlaceholder: '보안 확인을 위해 필수입니다',
            passportPhoto: '여권 사진 (선택)',
            passportPhotoNotice: '형식: JPG, PNG. 최대 크기: 5MB.',
            contactApp: '연락 앱',
            contactAppPlaceholder: '앱 선택 (선택)',
            appId: '앱 아이디 / 사용자명',
            appIdPlaceholder: '@사용자명 (선택)',
            arrivalDate: '도착 날짜',
            arrivalTime: '시간',
            confirm: '예약 확정',
            processing: '처리 중...',
            successTitle: '예약 신청 완료',
            successMessage: '곧 연락드리겠습니다.',
            another: '다른 예약 하기',
            errorRequired: '모든 필수 필드를 입력해주세요.'
        },
        games: {
            title: '일일 일정',
            startTime: '시작 시간: 매일 오후 8:00',
            threeGames: '서로 다른 블라인드 레벨의 3개 게임이 동시에 진행됩니다.',
            table1: {
                name: '테이블 1: 로우 블라인드',
                desc: '캐주얼 플레이어와 지역 매니아들에게 적합합니다.'
            },
            table2: {
                name: '테이블 2: 미드 블라인드',
                desc: '높은 스테이크와 숙련된 플레이어들의 경쟁적인 액션.'
            },
            table3: {
                name: '테이블 3: 하이 블라인드',
                desc: '전문 플레이어들을 위한 궁극의 하이 스테이크 경험.'
            }
        },
        rules: {
            title: '보험 및 특별 규칙',
            insurance: {
                title: '포커 보험',
                desc: '올인 상황에서 변동성을 줄이기 위한 선택적 기능입니다. 통계적으로 앞서 있을 때 팟의 일부를 미리 확보하세요.',
                bullet1: '큰 팟에서의 변동성 감소',
                bullet2: '리버 전 올인 상황에서 이용 가능',
                bullet3: '에쿼티에 기반한 보장된 지급'
            },
            squid: {
                title: '오징어 게임 규칙',
                c1: '챌린지 1: 7-2 인센티브',
                c1Desc: '7-2 오프수트(홀 카드)로 승리하면 테이블의 모든 플레이어로부터 즉시 바운티를 획득합니다.',
                c2: '챌린지 2: 스탠드업 게임',
                c2Desc: '"오징어"는 마지막으로 팟을 이긴 사람입니다. 승리한 생존자는 "앉고", 마지막까지 서 있는 사람은 테이블 페널티를 냅니다.',
                c3: '챌린지 3: 오징어 팟',
                c3Desc: '특정 하이 핸드 마일스톤이나 배드 비트 시나리오에 의해 발동되는 점진적인 미스터리 잭팟.'
            }
        },
        contact: {
            title: '게임 참여하기',
            subtitle: '방콕 중심부의 프리미엄 라운지를 방문하시거나 소셜 앱을 통해 문의하세요.',
            address: '88 Soi Sukhumvit 19, 방콕',
            fullAddress: '클롱 토이 누에아, 와타나, 방콕 10110, 태국',
            lineLabel: 'LINE으로 추가',
            telegramLabel: '텔레그램으로 문의',
            openHours: '매일 운영',
            gameStart: '24시간 게임 가능',
            googleMaps: '구글 맵에서 열기'
        }
    },
    cn: {
        nav: {
            home: '首页',
            about: '关于我们',
            schedule: '游戏安排',
            rules: '规则说明',
            contact: '联系我们',
            reserve: '立即预约',
            reserveSeat: '预订座位'
        },
        hero: {
            title: 'RiverOn Poker Bangkok',
            subtitle: '在曼谷市中心体验顶级博弈。',
            subtitle2: '私享牌桌、专业荷官、24/7 精彩不停。',
            premier: '高端尊享体验',
            book: '立即订位',
            contactUs: '联系我们'
        },
        about: {
            title: '关于',
            brand: 'RiverOn Poker Bangkok',
            p1: 'RiverOn Poker Bangkok 是一家位于曼谷市中心的顶级线下扑克俱乐部，专为寻求高质量现场扑克体验的国际玩家打造。',
            p2: '我们的目标是在舒适、公平且专业管理的环中汇聚来自世界各地的玩家。RiverOn Poker Bangkok 提供精致的氛围，让普通及资深玩家都能从容享受游戏的乐趣。',
            features: {
                safe: {
                    title: '安全保障',
                    desc: '专业安保团队，确保公平竞技与高标准安全。'
                },
                transfer: {
                    title: 'VIP 接送',
                    desc: '为认证的 VIP 玩家提供免费豪华接送服务。'
                },
                fb: {
                    title: '餐饮与停车',
                    desc: '为所有玩家提供免费餐饮及免费停车。'
                },
                insurance: {
                    title: '保险规则',
                    desc: '在全下（All-in）情况下减少波动的可选功能。'
                }
            }
        },
        reservation: {
            title: '预订您的座位',
            subtitle: '体验私密与奢华。为认证玩家提供 VIP 接送及住宿安排。',
            fullName: '全名',
            fullNamePlaceholder: '请输入您的姓名',
            phone: '手机号码',
            phonePlaceholder: '+66',
            passport: '护照号码',
            passportPlaceholder: '用于安全验证（必填）',
            passportPhoto: '护照照片（可选）',
            passportPhotoNotice: '格式：JPG, PNG。最大：5MB。',
            contactApp: '联系方式',
            contactAppPlaceholder: '选择应用（可选）',
            appId: '应用 ID / 用户名',
            appIdPlaceholder: '@用户名（可选）',
            arrivalDate: '到达日期',
            arrivalTime: '时间',
            confirm: '确认预约',
            processing: '处理中...',
            successTitle: '预约已收到',
            successMessage: '我们会尽快与您联系。',
            another: '再次预约',
            errorRequired: '请填写所有必填项。'
        },
        games: {
            title: '每日赛程',
            startTime: '开赛时间：每日 8:00 PM',
            threeGames: '每天晚上同时开启三个不同盲注级别的牌局。',
            table1: {
                name: '桌 1：低盲注',
                desc: '适合休闲玩家及当地扑克爱好者。'
            },
            table2: {
                name: '桌 2：中盲注',
                desc: '高额筹码的竞争性对局，适合资深玩家。'
            },
            table3: {
                name: '桌 3：高盲注',
                desc: '为专业玩家打造的顶级高额博弈体验。'
            }
        },
        rules: {
            title: '保险与特别规则',
            insurance: {
                title: '扑克保险',
                desc: '在全下情况下减少波动的可选功能。当你统计学上领先时，可以预先锁定部分奖资。',
                bullet1: '减少大底池的波动',
                bullet2: '可在河牌发出前全下时使用',
                bullet3: '根据胜率保证赔付'
            },
            squid: {
                title: '鱿鱼游戏规则',
                c1: '挑战 1：7-2 奖励',
                c1Desc: '使用 7-2 杂色手牌赢下底池，可立即获得桌上所有活跃玩家提供的赏金。',
                c2: '挑战 2：站立游戏',
                c2Desc: '“鱿鱼”是最后一个赢下底池的人。赢家可“坐下”，最后站着的一人需支付餐桌罚金。',
                c3: '挑战 3：鱿鱼奖池',
                c3Desc: '由特定顶级牌型或惜败场景触发的累积制神秘大奖。'
            }
        },
        contact: {
            title: '加入我们',
            subtitle: '访问我们位于曼谷市中心的顶级休息室，或通过社交软件联系我们。',
            address: '88 Soi Sukhumvit 19, 曼谷',
            fullAddress: '曼谷瓦他那县 Khlong Toei Nuea 10110',
            lineLabel: '添加 LINE 联系',
            telegramLabel: '通过 Telegram 联系',
            openHours: '每日开放',
            gameStart: '24小时精彩不断',
            googleMaps: '在谷歌地图中打开'
        }
    }
};
