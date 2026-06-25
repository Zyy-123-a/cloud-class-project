import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function IndexHome() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar')
            if (!navbar) return
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-md')
                navbar.classList.remove('bg-transparent')
            } else {
                navbar.classList.remove('bg-white', 'shadow-md')
                navbar.classList.add('bg-transparent')
            }
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Head>
                <title>课堂派 - 智能教学平台</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#165DFF',
                      secondary: '#FF7D00',
                      accent: '#36BFFA',
                      neutral: {
                        50: '#F9FAFB',
                        100: '#F5F7FA',
                        200: '#E5E6EB',
                        300: '#C9CDD4',
                        400: '#86909C',
                        500: '#4E5969',
                        600: '#272E3B',
                        700: '#1D2129',
                      }
                    },
                    fontFamily: {
                      inter: ['Inter', 'system-ui', 'sans-serif'],
                    },
                  },
                }
              }
            `,
                    }}
                />
                <style
                    type="text/tailwindcss"
                    dangerouslySetInnerHTML={{
                        __html: `
              @layer utilities {
                .content-auto { content-visibility: auto; }
                .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .transition-custom { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
                .card-hover { transition: all 0.3s ease; }
                .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
                .gradient-text { background-clip: text; -webkit-background-clip: text; color: transparent; background-image: linear-gradient(to right, #165DFF, #36BFFA); }
                .bg-glass { backdrop-filter: blur(8px); background-color: rgba(255, 255, 255, 0.8); }
                .feature-icon { @apply w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary text-2xl; }
                .btn-primary { @apply px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom font-medium shadow-lg shadow-primary/20; }
                .btn-outline { @apply px-6 py-3 bg-white text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-custom font-medium; }
              }
            `,
                    }}
                />
            </Head>

            <body className="font-inter bg-neutral-50 text-neutral-700 overflow-x-hidden">
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent" id="navbar">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="text-primary font-bold text-xl flex items-center">
                            <i className="fa-solid fa-graduation-cap mr-2"></i>
                            <span>课堂派</span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-neutral-700 hover:text-primary transition-custom font-medium">首页</a>
                            <a href="#feature" className="text-neutral-700 hover:text-primary transition-custom font-medium">产品功能</a>
                            <a href="#solution" className="text-neutral-700 hover:text-primary transition-custom font-medium">解决方案</a>
                            <a href="#news" className="text-neutral-700 hover:text-primary transition-custom font-medium">案例中心</a>
                            <a href="#help" className="text-neutral-700 hover:text-primary transition-custom font-medium">帮助中心</a>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Link内部全部包span，保证单一子元素 */}
                        <Link href="/login" className="hidden md:block px-4 py-2 text-primary hover:bg-primary/5 rounded-lg transition-custom font-medium">
                            <span>登录</span>
                        </Link>
                        <button className="md:hidden text-neutral-700">
                            <i className="fa-solid fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </header>

            <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-neutral-700 leading-tight mb-6">
                                智能教学<span className="gradient-text">新范式</span>
                            </h1>
                            <p className="text-xl text-neutral-500 mb-8 max-w-lg">
                                零代码快速搭建，有想法就能实现<br />
                                你的专属AI教学助手
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/login" className="px-8 py-4 bg-primary text-white rounded-lg text-center hover:bg-primary/90 transition-custom shadow-xl shadow-primary/20 font-medium text-lg">
                                    <span>免费试用 <i className="fa-solid fa-arrow-right ml-2"></i></span>
                                </Link>
                                <a href="#solution" className="px-8 py-4 bg-white text-primary border border-primary/20 rounded-lg text-center hover:bg-primary/5 transition-custom font-medium text-lg">
                                    预约演示
                                </a>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="flex -space-x-2">
                                    <img src="/avatar1.png" alt="用户头像" className="w-12 h-12 rounded-full border-2 border-white -ml-2" />
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <div className="text-yellow-400 flex">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <span className="ml-2 text-neutral-500 text-sm">4.8/5</span>
                                    </div>
                                    <p className="text-sm text-neutral-500">来自全国2000+高校的选择</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-custom">
                                <img src="/screen-demo.png" alt="课堂派教学场景" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl mb-2">AI智能备课助手</h3>
                                        <p className="text-white/80">一键生成个性化教案</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="feature" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 gradient-text">混合教学全过程管理</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-file-alt"></i></div>
                            <h3 className="text-xl font-bold mb-4">作业</h3>
                            <p className="text-gray-600">81种文档格式作业在线展示和批阅，实时查重，精准对比，避免学生抄袭。自动管理成绩，一键下载作业数据。</p>
                        </div>
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-pencil-ruler"></i></div>
                            <h3 className="text-xl font-bold mb-4">考试/练习</h3>
                            <p className="text-gray-600">单选、多选、填空、简答等10余种题型。支持题库随机抽题组卷。支持限时考试、选项随机等防作弊模式。</p>
                        </div>
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-book"></i></div>
                            <h3 className="text-xl font-bold mb-4">课件资料</h3>
                            <p className="text-gray-600">课件、资料、话题、公告等教学内容支撑。在线制作方便快捷，提升备课效率。支持课前发布活动，课中互动，课后巩固。</p>
                        </div>
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-comment-dots"></i></div>
                            <h3 className="text-xl font-bold mb-4">课中互动</h3>
                            <p className="text-gray-600">课件在线讲解、标记疑问 支持发言、开启弹幕、抢答、提问、话题讨论、黑板、画笔标注课堂要点，让课堂更精彩。</p>
                        </div>
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-qrcode"></i></div>
                            <h3 className="text-xl font-bold mb-4">考勤签到</h3>
                            <p className="text-gray-600">二维码、数字口令、GPS等5种考勤形式，精准有效、避免代签。签到数据自动生成，一键导出。</p>
                        </div>
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-chart-line"></i></div>
                            <h3 className="text-xl font-bold mb-4">成绩管理</h3>
                            <p className="text-gray-600">汇总互动数据、平时成绩、期末成绩。个性化配置成绩权重占比，数据报表一键导出下载，可留存，可追溯。</p>
                        </div>
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-chart-pie"></i></div>
                            <h3 className="text-xl font-bold mb-4">教学数据分析</h3>
                            <p className="text-gray-600">全方位教学数据信息化，可视化实时监测教学质量，把控教学进度，学业预警分析，提升教学效果。</p>
                        </div>
                        <div className="card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-video"></i></div>
                            <h3 className="text-xl font-bold mb-4">直播-云录屏</h3>
                            <p className="text-gray-600">满足线上线下混合式教学场景。动画及课件同屏+语音实现轻量级直播，不限人员数量，手机电脑均可参与。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-neutral-700 mb-4">智慧教学平台</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto text-lg">全方位支持线上线下融合教学，打造智能化教学新体验</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200 card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-chalkboard-user"></i></div>
                            <h3 className="text-xl font-bold text-neutral-700 mb-3">线下互动课堂</h3>
                            <p className="text-neutral-500">多种互动教学工具，沉浸式学习体验，精准化学习。</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200 card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-diagram-project"></i></div>
                            <h3 className="text-xl font-bold text-neutral-700 mb-3">混合教学全过程管理</h3>
                            <p className="text-neutral-500">课前课中课后全过程教学管理，教学数据可视化，可留存，提升教学质量。</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200 card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-video"></i></div>
                            <h3 className="text-xl font-bold text-neutral-700 mb-3">在线直播教室</h3>
                            <p className="text-neutral-500">在线直播教学搭配教学互动，充分还原真实的教学场景，提升教学效果。</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200 card-hover">
                            <div className="feature-icon"><i className="fa-solid fa-book-open"></i></div>
                            <h3 className="text-xl font-bold text-neutral-700 mb-3">在线课程建设</h3>
                            <p className="text-neutral-500">在线直播课、精品慕课资源、课程资源体系搭建，沉淀教学资源。</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#feature" className="btn-primary px-8 py-3">了解详细功能</a>
                            <Link href="/login" className="btn-outline px-8 py-3">
                                <span>立即注册体验</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solution" className="py-20 bg-neutral-50 relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/org-screen.png" alt="课堂派机构解决方案" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-neutral-700 mb-6">课堂派机构版</h2>
                            <div className="flex mb-8">
                                <div className="flex-shrink-0 mr-6"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl"><i className="fa-solid fa-bolt"></i></div></div>
                                <div><h3 className="text-xl font-bold text-neutral-700 mb-2">精准高效管理教学事务</h3><p className="text-neutral-500">一键对接教务系统，精准高效管理师生教学、课程、课务。</p></div>
                            </div>
                            <div className="flex mb-8">
                                <div className="flex-shrink-0 mr-6"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl"><i className="fa-solid fa-chart-line"></i></div></div>
                                <div><h3 className="text-xl font-bold text-neutral-700 mb-2">有效提升教学质量</h3><p className="text-neutral-500">以课堂教学为核心，以产出为导向；实时监控师生、课程、教学活动等教学过程。</p></div>
                            </div>
                            <div className="flex mb-8">
                                <div className="flex-shrink-0 mr-6"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl"><i className="fa-solid fa-box-archive"></i></div></div>
                                <div><h3 className="text-xl font-bold text-neutral-700 mb-2">教学资产管理</h3><p className="text-neutral-500">沉淀教学过程资产，促进优质课程、资源、知识图谱建设。</p></div>
                            </div>
                            <div className="flex mb-8">
                                <div className="flex-shrink-0 mr-6"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl"><i className="fa-solid fa-school"></i></div></div>
                                <div><h3 className="text-xl font-bold text-neutral-700 mb-2">智慧校园全景定制</h3><p className="text-neutral-500">以学生为中心，以教学为导向，提供校园全景智慧教学解决方案。</p></div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <a href="#feature" className="btn-primary px-8 py-3 text-center">了解详细功能</a>
                                <Link href="/login" className="btn-outline px-8 py-3 text-center">
                                    <span>申请免费试用</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="news" className="py-20 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-neutral-700 mb-4">新闻动态</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto text-lg">了解课堂派最新动态和行业资讯</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 card-hover">
                            <img src="https://picsum.photos/id/60/600/400" alt="新闻图片" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-neutral-500 mb-3"><span className="mr-4">2025-04-15</span><span className="flex items-center"><i className="fa-solid fa-eye mr-1"></i> 1.2k</span></div>
                                <h3 className="text-xl font-bold text-neutral-700 mb-3">课堂派3.0版本正式发布</h3>
                                <p className="text-neutral-500 mb-4 line-clamp-2">课堂派3.0版本正式上线，新增AI智能备课助手、虚拟实验室等多项功能，全面提升教学体验...</p>
                                <a href="#" className="text-primary inline-flex items-center font-medium text-sm">阅读更多 <i className="fa-solid fa-arrow-right ml-2"></i></a>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 card-hover">
                            <img src="https://picsum.photos/id/70/600/400" alt="新闻图片" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-neutral-500 mb-3"><span className="mr-4">2025-03-28</span><span className="flex items-center"><i className="fa-solid fa-eye mr-1"></i> 2.4k</span></div>
                                <h3 className="text-xl font-bold text-neutral-700 mb-3">课堂派荣获2025教育科技创新奖</h3>
                                <p className="text-neutral-500 mb-4 line-clamp-2">在2025中国教育科技大会上，课堂派凭借创新的AI教学解决方案荣获"年度教育科技创新奖"...</p>
                                <a href="#" className="text-primary inline-flex items-center font-medium text-sm">阅读更多 <i className="fa-solid fa-arrow-right ml-2"></i></a>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 card-hover">
                            <img src="https://picsum.photos/id/80/600/400" alt="新闻图片" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-neutral-500 mb-3"><span className="mr-4">2025-03-10</span><span className="flex items-center"><i className="fa-solid fa-eye mr-1"></i> 1.8k</span></div>
                                <h3 className="text-xl font-bold text-neutral-700 mb-3">与清华大学达成战略合作</h3>
                                <p className="text-neutral-500 mb-4 line-clamp-2">课堂派与清华大学教育研究院达成战略合作，共同探索AI技术在教育领域的深度应用...</p>
                                <a href="#" className="text-primary inline-flex items-center font-medium text-sm">阅读更多 <i className="fa-solid fa-arrow-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" className="btn-outline px-8 py-3 inline-flex items-center">查看更多新闻 <i className="fa-solid fa-arrow-right ml-2"></i></a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full"></div>
                <div className="absolute top-10 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-6">开启智能教学新时代</h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">立即注册课堂派，体验AI驱动的教学创新，提升教学效率和质量</p>
                    <Link href="/login" className="inline-block px-10 py-5 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-custom shadow-xl text-lg">
                        <span>免费注册 <i className="fa-solid fa-arrow-right ml-2"></i></span>
                    </Link>
                </div>
            </section>

            <footer id="help" className="bg-neutral-700 text-white pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="text-xl font-bold mb-6 flex items-center"><i className="fa-solid fa-graduation-cap mr-2"></i><span>课堂派</span></div>
                            <p className="text-neutral-300 mb-6 max-w-xs">智能教学平台，让教学更简单高效</p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center text-white hover:bg-primary transition-custom"><i className="fa-brands fa-weibo"></i></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center text-white hover:bg-primary transition-custom"><i className="fa-brands fa-wechat"></i></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-neutral-600 flex items-center justify-center text-white hover:bg-primary transition-custom"><i className="fa-brands fa-qq"></i></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">产品</h4>
                            <ul className="space-y-3">
                                <li><a href="#feature" className="text-neutral-300 hover:text-white transition-custom">产品功能</a></li>
                                <li><a href="#solution" className="text-neutral-300 hover:text-white transition-custom">解决方案</a></li>
                                <li>
                                    <Link href="/login" className="text-neutral-300 hover:text-white transition-custom">
                                        <span>价格</span>
                                    </Link>
                                </li>
                                <li><a href="#" className="text-neutral-300 hover:text-white transition-custom">更新日志</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">资源</h4>
                            <ul className="space-y-3">
                                <li><a href="#help" className="text-neutral-300 hover:text-white transition-custom">帮助中心</a></li>
                                <li><a href="#news" className="text-neutral-300 hover:text-white transition-custom">教学案例</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-white transition-custom">API文档</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-white transition-custom">开发者社区</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">关于我们</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-neutral-300 hover:text-white transition-custom">公司简介</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-white transition-custom">招贤纳士</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-white transition-custom">联系我们</a></li>
                                <li><a href="#" className="text-neutral-300 hover:text-white transition-custom">合作伙伴</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-neutral-600 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-neutral-400 text-sm mb-4 md:mb-0">© 2025 课堂派. 保留所有权利.</p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-custom">隐私政策</a>
                                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-custom">服务条款</a>
                                <a href="#" className="text-neutral-400 hover:text-white text-sm transition-custom">法律声明</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </body>
        </>
    )
}