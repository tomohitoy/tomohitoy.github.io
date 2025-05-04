/**
 * Content Management for Tomohito Yamazaki's Portfolio
 * Contains all text content in Japanese and English
 */

const siteContent = {
    // Japanese content
    ja: {
        meta: {
            title: "山﨑 智仁 | Tomohito Yamazaki | Research-Practitioner",
            description: "山﨑 智仁 (やまざき ともひと)のプロフィール、活動内容、連絡先をまとめたポートフォリオサイト"
        },
        languageSwitcher: {
            en: "English",
            ja: "日本語"
        },
        cards: {
            profile: {
                title: "山﨑 智仁",
                subtitle: "Tomohito Yamazaki",
                summary: "オルタナティブな教育の現場で実践しながら理論とシステムを構築する、研究的実践家（Research-Practitioner）です。"
            },
            teaching: {
                title: "担当講義・授業",
                subtitle: "Teaching",
                summary: "小学校から大学まで、幅広くプログラミング教育や探究型の学習を実践しています。"
            },
            advisory: {
                title: "学校アドバイザリー",
                subtitle: "School Advisory",
                summary: "教育現場での探究型学習やPBL、ICT活用を支援します。"
            },
            consulting: {
                title: "コンサルティング",
                subtitle: "Business Consulting",
                summary: "ビジネスデータを統計的に分析し、課題発見・解決を支援します。"
            },
            software: {
                title: "ソフトウェア開発",
                subtitle: "Software Development",
                summary: "ユーザー体験に配慮したデータ収集・活用システムを構築・実装します。"
            },
            research: {
                title: "研究",
                subtitle: "Research",
                summary: "学習者の認知プロセスやメタ認知を、データと記述の両側面で研究しています。"
            },
            contact: {
                title: "連絡先",
                subtitle: "Contact",
                email: "yamazaki@hokkisha.or.jp"
            }
        },
        modals: {
            profile: {
                title: "プロフィール",
                content: `
                    <h3>オルタナティブな教育の現場で実践しながら理論とシステムを構築する、研究的実践家（Research-Practitioner）です。</h3>
                    
                    <h3>所属</h3>
                    <ul>
                        <li>一般社団法人発起社 代表理事</li>
                        <li>慶應義塾大学大学院政策・メディア研究科 後期博士課程</li>
                        <li>早稲田大学人間科学部 教育コーチ</li>
                        <li>拓殖大学工学部 非常勤講師</li>
                        <li>ヒロック初等部・中等部</li>
                        <li>東京コミュニティスクール初等部 非常勤教育スタッフ</li>
                        <li>一般社団法人 FutureEdu 理事</li>
                        <li>Google for Education 認定イノベーター（#JPN19）</li>
                    </ul>
                    
                    <h3>経歴</h3>
                    <ul>
                        <li>2011年3月 慶應義塾大学環境情報学部 卒業</li>
                        <li>2013年3月 慶應義塾大学大学院政策・メディア研究科 修士課程 修了（CBプログラム）</li>
                        <li>2013年4月~2025年3月 慶應義塾大学SFC研究所 上席所員</li>
                        <li>2015年4月~2021年3月 特定非営利活動法人東京コミュニティスクール初等部 教育スタッフ</li>
                        <li>2022年9月 慶應義塾大学大学院政策・メディア研究科 後期博士課程 入学</li>
                        <li>2023年9月~ 早稲田大学人間科学部(通信課程) 教育コーチ</li>
                        <li>2024年9月~ 拓殖大学工学部 非常勤講師</li>
                        <li>2025年4月~ ヒロック初等部・中等部</li>
                    </ul>
                `
            },
            teaching: {
                title: "担当講義・授業",
                content: `
                    <h3>小学校から大学まで、幅広くプログラミング教育や探究型の学習を実践しています。</h3>
                    
                    <h3>拓殖大学工学部</h3>
                    <ul>
                        <li>2024年度秋学期
                            <ul>
                                <li>オープンソースソフトウェア (オンデマンド)</li>
                            </ul>
                        </li>
                        <li>2025年度秋学期
                            <ul>
                                <li>オープンソースソフトウェア (オンデマンド)</li>
                                <li>情報コミュニケーション技術 (対面)</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h3>東京コミュニティスクール初等部</h3>
                    <ul>
                        <li>2024年度後期
                            <ul>
                                <li>G2 IT</li>
                                <li>G3 IT</li>
                                <li>G4 IT</li>
                            </ul>
                        </li>
                        <li>2025年度
                            <ul>
                                <li>G5 IT</li>
                                <li>G6 算数</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h3>ヒロック中等部</h3>
                    <ul>
                        <li>2025年度
                            <ul>
                                <li>STEAMⅢ</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            advisory: {
                title: "学校アドバイザリー",
                content: `
                    <h3>教育現場での探究型学習やPBL、ICT活用を支援します。</h3>
                    <p>まず、学校現場での探究型学習やプロジェクト型学習のプランニング・実践・評価の方法論をご紹介する研修をしています。</p>
                    <p>さらに、研修のみならず、先生方と一緒にプランを組み立て、実践期間中のサポートやフィードバック、振り返りによる現状把握と課題発見までご一緒し、探究する学びの文化醸成をお手伝いしています。</p>
                    
                    <h3>学校のアドバイザリー</h3>
                    <ul>
                        <li>2023年3月~ ソライスクール、キッズドームソライ学童で実践しているプロジェクト型学習・マイプロジェクトのアドバイザー @株式会社SHONAI</li>
                        <li>2023年7月~ 探究テーマ学習のアドバイザー @ヒロック初等部・中等部</li>
                        <li>2024年6月 高専生・講師のイノベーションプロジェクトの外部評価者 @Labuan Matriculation College</li>
                        <li>2025年4月 高専生・講師のイノベーションプロジェクトの外部評価者 @Labuan Matriculation College</li>
                    </ul>
                    
                    <h3>学校・先生のための研修</h3>
                    <ul>
                        <li>2019年6月16日および6月30日 教員向けプログラミング的思考ワークショップ『プログラミングは，ことば。』 @東京コミュニティスクール</li>
                        <li>2020年2月16日, 2020年6月13日, 2023年2月25日, 2023年6月17日 挑戦を後押しする関わり方を学ぶための大人向けワークショップ『挑学のすすめ』 @東京コミュニティスクール</li>
                        <li>2021年7月28日 プロジェクト型学習の研修 @和光中学校</li>
                        <li>2022年4月22日 教員向けインプロワークショップ @三田国際学園中学校</li>
                        <li>2023年9月8日 スーパーサイエンスハイスクール（ＳＳＨ）科学的探究クラスの科学教育・統計教育の研修 @神奈川県立平塚江南高校</li>
                        <li>2024年8月9日 「探究する学び」研修：探究型学習、ワールドオリエンテーションのプランニング・実践・評価を学ぶ @イエナプランスクール</li>
                        <li>2020年9月~2023年1月 ブリッジラーニング：学習者中心の学びを実践するための、(1)児童生徒への理解を深め、(2)プロジェクト型学習をデザインする研修シリーズと学校の先生のためのオンラインコミュニティ</li>
                    </ul>
                    
                    <h3>一般・子ども向けのワークショップ</h3>
                    <ul>
                        <li>2017年3月16日 『Minecraft(マイクラ)と Codemonkey でマイ公園・プログラミング・パーク』 @CEPiC・トレッサ横浜</li>
                        <li>2017年5月5日,6日 『「ことば」としてのプログラミング』 @白金台パソコンスクール</li>
                        <li>2017年12月9日 『速習　無料アプリを使ったホームページ作成講座』 @白金台パソコンスクール</li>
                        <li>2022年5月11日 生徒向けインプロワークショップ @三田国際学園中学校</li>
                    </ul>
                `
            },
            consulting: {
                title: "コンサルティング",
                content: `
                    <h3>様々な大企業さまのビジネスデータを解析し、課題発見・解決策を支援するコンサルティングをしています。</h3>
                    
                    <ul>
                        <li>調査設計・統計解析・レポーティングまでの一気通貫コンサルティング</li>
                        <li>統計データ解析（検定による効果検証やモデリングによる予測など）</li>
                        <li>計算機科学・自然言語処理・機械学習手法を活用したデータマイニング</li>
                        <li>インタビュー調査・質的調査・文化人類学的手法を用いたUXデザイン</li>
                    </ul>
                    
                    <h3>データ解析</h3>
                    <ul>
                        <li>医療スタートアップ - 製薬企業との共同研究（レセプトデータのデータマイニング）</li>
                        <li>大手予備校 - 高校教員向けマーケティング調査（調査設計・統計解析・質的分析）</li>
                        <li>大手予備校 - 大学データ活用アドバイザリー業務（調査設計・コンサルティング）</li>
                        <li>通信会社 - 顧客満足度調査（クラスター分析を活用した顧客カテゴライズ）</li>
                        <li>特殊法人 - 市場調査・経営戦略（点推定を用いた売上予測）</li>
                        <li>金融 - 顧客フィードバック分析（テキストマイニング手法による異常値検知）</li>
                        <li>食品 - 消費行動調査・分析（調査設計・統計解析）</li>
                        <li>貿易会社スタートアップラボ - ユーザー調査・分析（調査設計・統計解析）</li>
                    </ul>
                    
                    <h3>ユーザー調査</h3>
                    <ul>
                        <li>株式会社エキュメノポリス - （管理画面開発のためのUser Experience設計）</li>
                        <li>株式会社コンセント - マーケティング調査にかかる，アドバイザリー・定性調査支援</li>
                    </ul>
                `
            },
            software: {
                title: "ソフトウェア開発",
                content: `
                    <h3>ユーザー体験に配慮したデータ収集・活用システム構築をしています。</h3>
                    <p>フロントエンドからバックエンドまで、一気通貫のシステム実装を得意としています。</p>
                    
                    <ul>
                        <li>データベース・バックエンドサーバーの設計・構築（BaaS: Firebase, IaaS: Google Cloud Platform, Amazon Web Service を利用）</li>
                        <li>ウェブアプリケーションの開発（Ruby on Rails, Vite, Nest, React, VanilaJS）</li>
                        <li>データビジュアライゼーションシステムの開発（d3.js）</li>
                    </ul>
                    
                    <h3>ウェブアプリケーション開発</h3>
                    <ul>
                        <li>コンピューターベースドテスト（CBT）プラットフォーム「たつじんテストICT」の開発
                            <ul>
                                <li>小中学生の回答ログを分析し、認知・メタ認知の診断的評価をするためのシステム</li>
                            </ul>
                        </li>
                        <li>児童生徒が登校したクイズで大会を開く、クイズ大会アプリケーションQuickClickの開発・実装
                            <ul>
                                <li>クイズを作って学ぶ教育アプリケーションの開発。</li>
                                <li>文部科学省　平成28年度「少子化・人口減少社会に対応した活力ある学校教育推進事業」、野洲市教育委員会（滋賀県）にて実施された遠隔教育プログラムで採用された。</li>
                            </ul>
                        </li>
                        <li>早稲田大学知覚情報システム研究所　研究支援アプリケーションの開発
                            <ul>
                                <li>『オンライン会話データ自動収集アプリケーション開発』</li>
                                <li>『語学技能判定モバイルウェブインタフェース開発』</li>
                                <li>『語学技能判定システムのデータ表示・活用インタフェース開発』</li>
                                <li>『オンライン授業収録管理システムの作成』</li>
                                <li>『オンライン英会話授業分析プラットフォームのプロトタイプ』</li>
                                <li>『オンライン英会話授業分析プラットフォームの拡張機能』</li>
                                <li>『英会話能力判定システムを利用するためのユーザーインタフェース実装』</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            research: {
                title: "研究",
                content: `
                    <h3>学習者の認知プロセスやメタ認知を、データと記述の両側面で研究しています。</h3>
                    <p>実証的研究：CBTプラットフォームを開発し、教育データマイニングによって、認知プロセスとメタ認知の研究をしています。</p>
                    <p>仮説生成的研究：教育現場でのアクションリサーチやエスノグラフィー、構成主義的グラウンデッド・セオリーなどで、教師と児童生徒の関わりを研究しています。</p>
                    
                    <h3>児童生徒の認知プロセスとメタ認知</h3>
                    <ul>
                        <li>Yamazaki, T. & Imai, M. (2024), Differential Metacognitive Activation in Intuitive versus Reflective Thinking in Classroom Assessment Test, Poster presented at 46th Annual Meeting of the Cognitive Science Society (CogSci 2024), Rotterdam, Netherland, Jul. 2024.</li>
                        <li>Yamazaki, T, Imai, M (2023), A Cognitive and Metacognitive Diagnostic Assessment System: TATSUJIN Test ICT, Paper Presented at *2023 IEEE International Conference on Engineering, Technology & Education (TALE)*, Auckland, New Zealand, 2023</li>
                    </ul>
                    
                    <h3>教師と児童生徒の関わり</h3>
                    <ul>
                        <li>Iba T, Ichikawa C, Sakamoto M, Yamazaki T (2011), Pedagogical Patterns for Creative Learning, Paper Presented at 18th Conference on Pattern Language of Programs, Portland(OR, US), Oct., 2011</li>
                    </ul>
                    
                    <h3>その他</h3>
                    <ul>
                        <li>Onozuka R, Yamazaki T, Kokuryo J (2016), Redefiners of Discipline Borders: A Bayesian Detection Method for Conceptual Changes in Scientific Knowledge, Poster Presented at The 2016 International Conference on Information Systems (ICIS 2016), Dublin(Ireland), Dec., 2016</li>
                        <li>Sugimoto N, Kawai N, Yoshiyama T, Yamamoto Y, Yamazaki T, Shirai C, Fujimoto Y (2015), PSS38. A Retrospective Cohort Study to investigate actual treatment for Glaucoma using a Japanese Healthcare Database, Value in Health , Volume 18 , Issue 3 , A185</li>
                        <li>Asami Y, Kuribayashi K, Hoshino Y, Yamamoto Y, Nagayasu S, Yamazaki T, Fujimoto Y (2015), PMH5. A Retrospective Cohort study using claims database to investigate the actual situation in treatment of Panic Disorder in Japan, Value in Health , Volume 18 , Issue 3 , A115</li>
                        <li>Kawabata I, Ii Y, Yamamoto Y, Yamazaki T, Fujimoto Y (2015) PSY11. The actual clinical use of Antifungal Drugs in Patients who received Hematopoietic Stem Cell Transplantation in Japan: a retrospective database study, Value in Health , Volume 18 , Issue 3 , A293</li>
                    </ul>
                    
                    <h3>招待講演</h3>
                    <ul>
                        <li>2019年11月30日 QuickClickで生まれる探究する学び　未来の教室 in 明日の教室，『明日の教室 特別セッション 関西私立校のICT活用実践』にて招待講演　京都橘大学</li>
                        <li>2022年10月14日 So You Think You Can't Innovate? Think Again: bridge learning "Connecting Teachers by Building Community of Learner-Centered Practice", at Labuan Matriculation College, Malaysia, Oct. 14th 2022</li>
                    </ul>
                    
                    <h3>受賞歴</h3>
                    <ul>
                        <li>2013年7⽉ 未来を変えるデザイン展　Hackathon for Social Change 日本財団賞受賞</li>
                        <li>2018年1⽉ Singularity University Japan Global Impact Challenge, 2018 Winner</li>
                        <li>2018年5⽉ OpenIDEO Early Childhood Innovation Prize, New Innovator, Top Idea</li>
                        <li>2018年8⽉ ズッコケ三人組40周年同窓会 ビブリオバトル 2018 ファンクラブ会長賞</li>
                    </ul>
                `
            },
            contact: {
                title: "連絡先",
                content: `
                    <p>お問い合わせは以下のアドレスにお願い致します。</p>
                    <p>Email: <a href="mailto:yamazaki@hokkisha.or.jp">yamazaki@hokkisha.or.jp</a></p>
                `
            }
        },
        footer: {
            copyright: "© 2025 Tomohito Yamazaki"
        }
    },
    
    // English content (machine translated from Japanese)
    en: {
        meta: {
            title: "Tomohito Yamazaki | Research-Practitioner",
            description: "Portfolio website featuring Tomohito Yamazaki's profile, activities, and contact information"
        },
        languageSwitcher: {
            en: "English",
            ja: "日本語"
        },
        cards: {
            profile: {
                title: "Tomohito Yamazaki",
                subtitle: "",
                summary: "A Research-Practitioner building theories and systems in alternative schools."
            },
            teaching: {
                title: "Teaching",
                subtitle: "Classes & Lectures",
                summary: "Teaches STEAM to students from elementary to university students."
            },
            advisory: {
                title: "School Advisory",
                subtitle: "Educational Support",
                summary: "Provides inquiry-based learning and digitalization training and support."
            },
            consulting: {
                title: "Business Consulting",
                subtitle: "Data Analysis",
                summary: "Analyzes business data to problem identification and solutions."
            },
            software: {
                title: "Software Development",
                subtitle: "System Construction",
                summary: "Develops data-driven systems for user experience."
            },
            research: {
                title: "Research",
                subtitle: "Academic Work",
                summary: "Researches human learning from both data-driven and descriptive approaches."
            },
            contact: {
                title: "Contact",
                subtitle: "Get in Touch",
                email: "yamazaki@hokkisha.or.jp"
            }
        },
        modals: {
            profile: {
                title: "Profile",
                content: `
                <h3>A Research-Practitioner building theories and systems in alternative schools.</h3>
                
                <h3>Affiliations</h3>
                    <ul>
                        <li>CEO, Hokkisha Inc.</li>
                        <li>Doctoral Student, Graduate School of Media and Governance, Keio University</li>
                        <li>Educational Coach, School of Human Sciences, Waseda University</li>
                        <li>Part-time Lecturer, Faculty of Engineering, Takushoku University</li>
                        <li>Researcher, Hillock Primary and Secondary School</li>
                        <li>Part-time Teacher, Tokyo Community School</li>
                        <li>Google for Education Certified Innovator (#JPN19)</li>
                    </ul>
                    
                    <h3>History</h3>
                    <ul>
                        <li>March 2011: Graduated from Faculty of Environment and Information Studies, Keio University</li>
                        <li>March 2013: Completed Master's Program (CB Program), Graduate School of Media and Governance, Keio University</li>
                        <li>April 2013 - March 2025: Senior Researcher, Keio University SFC Research Institute</li>
                        <li>April 2015 - March 2021: Educational Staff, Tokyo Community School Elementary Division NPO</li>
                        <li>September 2022: Entered Doctoral Program, Graduate School of Media and Governance, Keio University</li>
                        <li>September 2023 - Present: Educational Coach, School of Human Sciences (Correspondence Course), Waseda University</li>
                        <li>September 2024 - Present: Part-time Lecturer, Faculty of Engineering, Takushoku University</li>
                        <li>April 2025 - Present: Hillock Primary and Secondary School</li>
                    </ul>
                `
            },
            teaching: {
                title: "Teaching",
                content: `
                    <h3>Teaches STEAM to students from elementary to university students.</h3>
                    
                    <h3>Takushoku University, Faculty of Engineering</h3>
                    <ul>
                        <li>Fall Semester 2024
                            <ul>
                                <li>Open Source Software (On-demand)</li>
                            </ul>
                        </li>
                        <li>Fall Semester 2025
                            <ul>
                                <li>Open Source Software (On-demand)</li>
                                <li>Communication Skills for Information Science (Face-to-face)</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h3>Tokyo Community School Elementary Division</h3>
                    <ul>
                        <li>Second Semester 2024
                            <ul>
                                <li>Grade 2 Information Technology</li>
                                <li>Grade 3 Information Technology</li>
                                <li>Grade 4 Information Technology</li>
                            </ul>
                        </li>
                        <li>Academic Year 2025
                            <ul>
                                <li>Grade 5 Information Technology</li>
                                <li>Grade 6 Mathematics</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <h3>Hiroku Junior High School</h3>
                    <ul>
                        <li>Academic Year 2025
                            <ul>
                                <li>STEAM III</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            advisory: {
                title: "School Advisory",
                content: `
                    <h3>Provides inquiry-based learning and digitalization training and support.</h3>
                    <p>I provide training to introduce methodology for planning, implementing, and evaluating inquiry-based learning and project-based learning in school settings.</p>
                    <p>Furthermore, beyond just training, I help build plans together with teachers, provide support and feedback during the implementation period, and assist with reflection to understand current status and identify issues, helping to foster a culture of inquiry-based learning.</p>
                    
                    
                    <h3>School Advisory</h3>
                    <ul>
                        <li>March 2023 - Present: Advisor for project-based learning and personal projects implemented at SORAI SCHOOL and Kids Dome Sorai After-school Program @SHONAI Corporation</li>
                        <li>July 2023 - Present: Advisor for inquiry-based thematic learning @Hillock Primary and Secondary School</li>
                        <li>June 2024: External evaluator for innovation projects by technical college students and instructors @Labuan Matriculation College</li>
                        <li>April 2025: External evaluator for innovation projects by technical college students and instructors @Labuan Matriculation College</li>
                    </ul>
                    
                    <h3>Training for Schools and Teachers</h3>
                    <ul>
                        <li>June 16 and 30, 2019: Workshop for teachers on computational thinking "Programming is Language." @Tokyo Community School</li>
                        <li>February 16, 2020, June 13, 2020, February 25, 2023, June 17, 2023: Workshop for adults to learn how to support challenges "Encouragement of Challenge Learning" @Tokyo Community School</li>
                        <li>July 28, 2021: Project-based learning training @Wako Junior High School</li>
                        <li>May 11, 2022: Improvisation workshop for teachers@Mita International Junior High School</li>
                        <li>September 8, 2023: Super Science High School (SSH) scientific inquiry class science education and statistics education training @Kanagawa Prefectural Hiratsuka Konan High School</li>
                        <li>August 9, 2024: Planning, process, and evaluation of inquiry-based learning @Alternative School</li>
                        <li>September 2020 - January 2023: bridge learning: A training series and online community for school teachers to (1) deepen understanding of students and (2) design project-based learning with the learner-centered approach</li>
                    </ul>
                    
                    <h3>Workshops for the General Public and Children</h3>
                    <ul>
                        <li>March 16, 2017: "My Park Programming Park with Minecraft and Codemonkey" @CEPiC/Tressa Yokohama</li>
                        <li>May 5-6, 2017: "Programming as 'Language'" @Shirokane-dai Computer School</li>
                        <li>December 9, 2017: "Quick Course on Creating Homepages Using Free Apps" @Shirokane-dai Computer School</li>
                        <li>April 22, 2022: Training for teachers @Mita International School</li>
                        <li>May 11, 2022: Improv workshop for students @Mita International School</li>
                    </ul>
                `
            },
            consulting: {
                title: "Business Consulting",
                content: `
                    <h3>Analyzes business data to problem identification and solutions.</h3>
                    
                    <ul>
                        <li>End-to-end consulting from survey design to statistical analysis and reporting</li>
                        <li>Statistical data analysis (specializing in generalized linear models and Bayesian modeling using glm and Stan for testing and predictive model construction)</li>
                        <li>Data mining using computer science, natural language processing, and machine learning methods</li>
                        <li>UX design using interview surveys, qualitative research, and cultural anthropological methods</li>
                    </ul>
                    
                    <h3>Data Analysis</h3>
                    <ul>
                        <li>Medical startup - Joint research with pharmaceutical companies (data mining of receipt data)</li>
                        <li>Prep school - Marketing survey for high school teachers (survey design, statistical analysis, qualitative analysis)</li>
                        <li>Prep school - University data utilization advisory services (survey design, consulting)</li>
                        <li>Telecommunications company - Customer satisfaction survey (customer categorization using cluster analysis)</li>
                        <li>Special corporation - Market research and business strategy (sales forecasting using point estimation)</li>
                        <li>Finance - Customer feedback analysis (anomaly detection using text mining methods)</li>
                        <li>Food industry - Consumer behavior survey and analysis (survey design, statistical analysis)</li>
                        <li>Trading company startup lab - User survey and analysis (survey design, statistical analysis)</li>
                    </ul>
                    
                    <h3>User Research</h3>
                    <ul>
                        <li>Equmenopolis Inc. - (User Experience design for admin panel development)</li>
                        <li>Concent Inc. - Advisory and qualitative research support for marketing surveys</li>
                    </ul>
                `
            },
            software: {
                title: "Software Development",
                content: `
                    <h3>Develops data-driven systems for user experience.</h3>
                    <p>Specializes in implementing end-to-end systems from frontend to backend.</p>
                    
                    <ul>
                        <li>Design and construction of databases and backend servers (using BaaS: Firebase, IaaS: Google Cloud Platform, Amazon Web Service)</li>
                        <li>Web application development (Ruby on Rails, Vite, Nest, React, VanillaJS)</li>
                        <li>Data visualization system development (d3.js)</li>
                    </ul>
                    
                    <h3>Web Application Development</h3>
                    <ul>
                        <li>Development of Computer-Based Test (CBT) platform "TATSUJIN Test ICT"
                            <ul>
                                <li>A system for analyzing response logs from elementary and junior high school students to perform diagnostic assessment of cognition and metacognition</li>
                            </ul>
                        </li>
                        <li>Development and implementation of QuickClick, a real-time quiz application for holding competitions with submitted quizzes
                            <ul>
                                <li>Development of an educational application for learning by creating quizzes</li>
                                <li>Adopted in the distance education program implemented by the Yasu City Board of Education (Shiga Prefecture) under the Ministry of Education, Culture, Sports, Science and Technology's FY2016 "Project to Promote Vibrant School Education in Response to Declining Birthrate and Population"</li>
                            </ul>
                        </li>
                        <li>Development of research support applications for Waseda University Perceptual Information Systems Laboratory
                            <ul>
                                <li>"Online Conversation Data Automatic Collection Application Development"</li>
                                <li>"Language Skills Assessment Mobile Web Interface Development"</li>
                                <li>"Data Display and Utilization Interface Development for Language Skills Assessment System"</li>
                                <li>"Creation of Online Class Recording Management System"</li>
                                <li>"Prototype of Online English Conversation Class Analysis Platform"</li>
                                <li>"Extended Functions for Online English Conversation Class Analysis Platform"</li>
                                <li>"User Interface Implementation for Using the English Conversation Ability Assessment System"</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            research: {
                title: "Research",
                content: `
                    <h3>Researches human learning from both data-driven and descriptive approaches.</h3>
                    <p>Empirical research: Developing CBT platforms and researching cognitive processes and metacognition through educational data mining.</p>
                    <p>Hypothesis-generating research: Studying teacher-student interactions through action research, ethnography, and constructivist grounded theory in educational settings.</p>
                    
                    <h3>Students' Cognitive Processes and Metacognition</h3>
                    <ul>
                        <li>Yamazaki, T. & Imai, M. (2024), Differential Metacognitive Activation in Intuitive versus Reflective Thinking in Classroom Assessment Test, Poster presented at 46th Annual Meeting of the Cognitive Science Society (CogSci 2024), Rotterdam, Netherland, Jul. 2024.</li>
                        <li>Yamazaki, T, Imai, M (2023), A Cognitive and Metacognitive Diagnostic Assessment System: TATSUJIN Test ICT, Paper Presented at *2023 IEEE International Conference on Engineering, Technology & Education (TALE)*, Auckland, New Zealand, 2023</li>
                    </ul>
                    
                    <h3>Teacher-Student Interactions</h3>
                    <ul>
                        <li>Iba T, Ichikawa C, Sakamoto M, Yamazaki T (2011), Pedagogical Patterns for Creative Learning, Paper Presented at 18th Conference on Pattern Language of Programs, Portland(OR, US), Oct., 2011</li>
                    </ul>
                    
                    <h3>Miscellaneous</h3>
                    <ul>
                        <li>Onozuka R, Yamazaki T, Kokuryo J (2016), Redefiners of Discipline Borders: A Bayesian Detection Method for Conceptual Changes in Scientific Knowledge, Poster Presented at The 2016 International Conference on Information Systems (ICIS 2016), Dublin(Ireland), Dec., 2016</li>
                        <li>Sugimoto N, Kawai N, Yoshiyama T, Yamamoto Y, Yamazaki T, Shirai C, Fujimoto Y (2015), PSS38. A Retrospective Cohort Study to investigate actual treatment for Glaucoma using a Japanese Healthcare Database, Value in Health , Volume 18 , Issue 3 , A185</li>
                        <li>Asami Y, Kuribayashi K, Hoshino Y, Yamamoto Y, Nagayasu S, Yamazaki T, Fujimoto Y (2015), PMH5. A Retrospective Cohort study using claims database to investigate the actual situation in treatment of Panic Disorder in Japan, Value in Health , Volume 18 , Issue 3 , A115</li>
                        <li>Kawabata I, Ii Y, Yamamoto Y, Yamazaki T, Fujimoto Y (2015) PSY11. The actual clinical use of Antifungal Drugs in Patients who received Hematopoietic Stem Cell Transplantation in Japan: a retrospective database study, Value in Health , Volume 18 , Issue 3 , A293</li>
                    </ul>
                    
                    <h3>Invited Talks</h3>
                    <ul>
                        <li>November 30, 2019: "Generating Creative Learning with QuickClick" -How to generate the creative learning from experiential learning to apply the information technology into classroom, in Japanese "QuickClickで生まれる探究する学び", Invited Talk Presented at “未来の教室 in 明日の教室”, supported by Ministry of Economy, Trade and Industry, Kyoto, November 30, 2019.</li>
                        <li>October 14, 2022: "So You Think You Can't Innovate? Think Again: bridge learning 'Connecting Teachers by Building Community of Learner-Centered Practice'," at Labuan Matriculation College, Malaysia</li>
                    </ul>
                    
                    <h3>Awards</h3>
                    <ul>
                        <li>July 2013: Japan Foundation Award at "Design Exhibition to Change the Future: Hackathon for Social Change"</li>
                        <li>January 2018: Singularity University Japan Global Impact Challenge, 2018 Winner</li>
                        <li>May 2018: OpenIDEO Early Childhood Innovation Prize, New Innovator, Top Idea</li>
                        <li>August 2018: Fan Club President's Award at "Zukoke Trio 40th Anniversary Reunion Bibliobattle 2018"</li>
                    </ul>
                `
            },
            contact: {
                title: "Contact",
                content: `
                    <p>Please contact me at the address below.</p>
                    <p>Email: <a href="mailto:yamazaki@hokkisha.or.jp">yamazaki@hokkisha.or.jp</a></p>
                `
            },
        },
        footer: {
            copyright: "© 2025 Tomohito Yamazaki"
        }
    },
    
    // Social media platforms
    social: {
        twitter: "https://twitter.com/tomohitoy",
        facebook: "https://www.facebook.com/tomohito.yamazaki",
        instagram: "https://www.instagram.com/tomohitoy/",
        github: "https://github.com/tomohitoy"
    }
};
