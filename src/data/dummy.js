import { GiAmbulance } from "react-icons/gi";
import { FaUserDoctor,FaMoneyBills } from "react-icons/fa6";
import { GrAid } from "react-icons/gr";
import { FaBath,FaArrowLeft,FaWhatsapp,FaClinicMedical } from "react-icons/fa";
import { IoStar, IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineEditNote } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaSnapchatGhost } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiUser, CiLogin } from "react-icons/ci";

import Ellipse1 from './Ellipse 31.png'
import Ellipse2 from './Ellipse 32.png'
import Ellipse3 from './Ellipse 33.png'
import Ellipse4 from './Ellipse 34.png'
import Ellipse5 from './Group 17445.png'
import ImagePl1 from './imageBox1.png'
import ImagePl2 from './imageBox2.png'
import ImagePl3 from './imageBox3.png'
import ImagePl4 from './imageBox4.png'
import ImagePl5 from './imageBox5.png'
import ImagePl6 from './imageBox6.png'
import ImageDoc1 from './doc1.png'
import ImageDoc2 from './doc2.png'
import ImageDoc3 from './doc3.png'
import ImageDoc4 from './doc4.png'
import ImageBlog1 from './Blog1.png'
import ImageFace from './Facebook.png'
import ImageGoog from './Google.png'
import ImageYout from './YouTube.png'
import ImagePint from './Pinterest.png'
import ImageTwit from './Twitch.png'
import ImageWebf from './Webflow.png'
import ImagePrev from './preview 1.png'
import imageN1 from './n1.png'
import imageN2 from './n2.png'
import imageN3 from './n3.png'
import imageN4 from './n4.png'
import imageN5 from './n5.png'
import imageN6 from './n6.png'
import selectDoc1 from './selectDoc1.png'
import selectDoc2 from './selectDoc2.png'
import selectDoc3 from './selectDoc3.png'
import selectDoc4 from './selectDoc4.png'

export const links = [
    {
        name: 'الرئيسية',
        path: 'الرئيسية',
        color: '#C7AF7C'
    },
    {
        name: 'من نحن',
        path: 'من-نحن',
        color: '#C7AF7C'
    },
    {
        name: 'خدماتنا',
        path: 'خدماتنا',
        color: '#C7AF7C'
    },
    {
        name: 'أطباؤنا',
        path: 'أطباؤنا',
        color: '#C7AF7C'
    },
    {
        name: 'المدونة',
        path: 'المدونة',
        color: '#C7AF7C'
    },
    {
        name: 'الحجز',
        path: 'الحجز',
        color: '#C7AF7C'
    },
    {
        name: 'إتصل بنا',
        path: 'إتصل-بنا',
        color: '#C7AF7C'
    },
    {
        name: 'صفحتى',
        path: 'صفحتى',
        color: '#C7AF7C'
    },
]
export const linksMyPage =[
    { name: 'البيانات', path: 'صفحتى', icon: <CiUser size={20}/>  },
    { name: 'الحجوزات', path: 'الحجوزات', icon: <MdOutlineEditNote size={20}/> },
    { name: 'الإشعارات', path: 'الإشعارات', icon: <IoNotificationsOutline size={20}/> },
    { name: 'تسجيل الخروج', path: '#logout', icon: <CiLogin size={20} />, color: '#FF0000'},
]
export const Home2 = [
    {
        title: 'صحتك تأتى دائمأ فى المقام الأول .',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن فريقنا من المهنيين الطبيين المهرة والمساعدين حصولك على الرعاية نحن نقدم مجموعة واسعة من الخدمات، بدءًا من الفحوصات الروتينية وإدارة الأدوية وحتى العلاج الطبيعي والعناية بالجروح. يعمل المتخصصون لدينا بشكل وثيق معك ومع عائلتك لإنشاء خطة رعاية مخصصة تناسب احتياجاتك وتفضيلاتك الفريدة.',
        image: `${process.env.PUBLIC_URL}//images/image1.png`,
        button: 'إحجز الأن',
        color: '#C7AF7C',
        decColor: '#818181',
        path: "/الحجز"
    }
]
export const aboutData = {
    aboutPage: {
        sections: [
            {
                title: 'رؤيتنا',
                description: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن فريقنا من المهنيين الطبيين المهرة مخصصة تناسب احتياجاتك وتفضيلاتك الفريدة.',
                icon: <FaRegEye />
            },
            {
                title: 'رسالتنا',
                description: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن فريقنا من المهنيين الطبيين المهرة مخصصة تناسب احتياجاتك وتفضيلاتك الفريدة.',
                icon: <BiMessageSquareDetail />
            },
            {
                title: 'الأهداف',
                icon: <BiMessageSquareDetail />,
                skills: [
                    {
                    image: imageN1,
                    title: 'مع خدمات عيادة الرعاية الفاخرة سوف تتل المهنيين الطبيين المهرة مخصصة احتياجاتك وتفضيلاتك الفريدة.',
                    },
                                    {
                    image: imageN2,
                    title: 'مع خدمات عيادة الرعاية الفاخرة سوف تتل المهنيين الطبيين المهرة مخصصة احتياجاتك وتفضيلاتك الفريدة.',
                    },
                                    {
                    image: imageN3,
                    title: 'مع خدمات عيادة الرعاية الفاخرة سوف تتل المهنيين الطبيين المهرة مخصصة احتياجاتك وتفضيلاتك الفريدة.',
                    },
                                    {
                    image: imageN4,
                    title: 'مع خدمات عيادة الرعاية الفاخرة سوف تتل المهنيين الطبيين المهرة مخصصة احتياجاتك وتفضيلاتك الفريدة.',
                    },
                                    {
                    image: imageN5,
                    title: 'مع خدمات عيادة الرعاية الفاخرة سوف تتل المهنيين الطبيين المهرة مخصصة احتياجاتك وتفضيلاتك الفريدة.',
                    },
                                    {
                    image: imageN6,
                    title: 'مع خدمات عيادة الرعاية الفاخرة سوف تتل المهنيين الطبيين المهرة مخصصة احتياجاتك وتفضيلاتك الفريدة.',
                    },
                    
                ]
            }
        ],
    aboutUs: {
        title: 'من نحن',
        description: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن فريقنا من المهنيين الطبيين المهرة والمساعدين حصولك على الرعاية نحن نقدم مجموعة واسعة من الخدمات، بدءًا من الفحوصات الروتينية وإدارة الأدوية مخصصة تناسب احتياجاتك وتفضيلاتك الفريدة.',
        button: 'المزيد عنا',
        path: "من-نحن",
        colors: {
        primary: '#C7AF7C',
        text: '#818181'
        }
    }
    }
};
export const Services2 = [
    {
        title: 'الخدمة السريعة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <GrAid/>,
        color: '#887856',
        location: '/خدماتنا'
    },
    {
        title: 'أطباء مؤهلة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaUserDoctor    />,
        color: '#887856',
        location: '/أطباؤنا'
    },
    {
        title: 'رعاية الطوارئ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <GiAmbulance/>,
        color: '#887856',
    },
    {
        title: 'مسرح العمليات ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaBath/>,
        color: '#887856',
    },
    {
        title: 'مسرح العمليات ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaBath/>,
        color: '#887856',
    },
    {
        title: 'عيادة متجددة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaClinicMedical/>,
        color: '#887856',
    },
    {
        title: 'رسوم إستشارة أقل',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaMoneyBills/>,
        color: '#887856',
    },
    {
        title: 'مسرح العمليات ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaBath/>,
        color: '#887856',
    }, 
    {
        title: 'علاج مهنى',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaUserDoctor    />,
        color: '#887856',
    },
    {
        title: 'الخدمة السريعة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <GrAid/>,
        color: '#887856',
    },
        {
        title: 'الخدمة السريعة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <GrAid/>,
        color: '#887856',
        location: '/خدماتنا'
    },
    {
        title: 'أطباء مؤهلة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaUserDoctor    />,
        color: '#887856',
        location: '/أطباؤنا'
    },
    {
        title: 'رعاية الطوارئ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <GiAmbulance/>,
        color: '#887856',
    },
    {
        title: 'مسرح العمليات ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaBath/>,
        color: '#887856',
    },
    {
        title: 'مسرح العمليات ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaBath/>,
        color: '#887856',
    },
    {
        title: 'عيادة متجددة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaClinicMedical/>,
        color: '#887856',
    },
    {
        title: 'رسوم إستشارة أقل',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaMoneyBills/>,
        color: '#887856',
    },
    {
        title: 'مسرح العمليات ',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaBath/>,
        color: '#887856',
    }, 
    {
        title: 'علاج مهنى',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <FaUserDoctor    />,
        color: '#887856',
    },
    {
        title: 'الخدمة السريعة',
        dec: 'مع خدمات عيادة الرعاية الفاخرة سوف تتلقى أفضل علاج طبي في منزلك. يضمن  مجموعة واسعة من الخدمات',
        icon: <GrAid/>,
        color: '#887856',
    },
]      
export const Sections2 = [
    {
        id: 1,
        title: 'العيون',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl1,
        start: [{
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 2,
        title: 'الأسنان',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl2,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 3,
        title: 'العظام',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl3,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 4,
        title: 'الجراحة',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl4,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 5,
        title: 'أمراض القلب',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl5,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 6,
        title: 'التشخيص',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl6,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 1,
        title: 'العيون',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl1,
        start: [{
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 2,
        title: 'الأسنان',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl2,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 3,
        title: 'العظام',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl3,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 4,
        title: 'الجراحة',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl4,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 5,
        title: 'أمراض القلب',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl5,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
    {
        id: 6,
        title: 'التشخيص',
        dec: 'الأطباء الخاصة بالقسم',
        ImagePl: ImagePl6,
        start: [
            {
                Image: Ellipse1,
            },
            {
                Image: Ellipse2,
            },
            {
                Image: Ellipse3,
            },
            {
                Image: Ellipse4,
            },
            {
                Image: Ellipse5,
            },
        ],
        location: '/اقسام',
    },
]      
export const Doctors2 = [
    { 
        id: 1, 
        name: 'د/ أحمد عبد العزيز', 
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        spec: 'أطفال',
        Image: ImageDoc1,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
    { 
        id: 2, 
        name: 'دكتورة منال مسعود',
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        spec: 'نسا وتوليد ',
        Image: ImageDoc2,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
    { 
        id: 3, 
        name: 'دكتور نايف آل سعود',
        spec: 'جراحة',
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        Image: ImageDoc3,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
    { 
        id: 4, 
        name: 'دكتورة فاطمة سعد',
        spec: 'أسنان',
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        Image: ImageDoc4,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
    { 
        id: 1, 
        name: 'د/ أحمد عبد العزيز', 
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        spec: 'أطفال',
        Image: ImageDoc1,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
    { 
        id: 2, 
        name: 'دكتورة منال مسعود',
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        spec: 'نسا وتوليد ',
        Image: ImageDoc2,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
    { 
        id: 3, 
        name: 'دكتور نايف آل سعود',
        spec: 'جراحة',
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        Image: ImageDoc3,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
    { 
        id: 4, 
        name: 'دكتورة فاطمة سعد',
        spec: 'أسنان',
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        Image: ImageDoc4,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        start: [<IoStar/>],
        numStart: '4.8',
        numsStart: '(321)',
        dec: ' 9375 مريضا ',
        title: 'مستشفى الجعيدى , مدينة جدة',
        button: 'إحجز الأن',
        location: '/الحجز',
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
    ]
    },
]
export const Blog2 = [
    {
        id: 1,
        Image: ImageBlog1,
        title:  'عنوان المقال',
        date: '17/12/2024',
        dec: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى ...',
        button: 'المزيد',
        icon: <FaArrowLeft/>,
        location: '/المدونة',
    },
    {
        id: 2,
        Image: ImageBlog1,
        title:  'عنوان المقال',
        date: '17/12/2024',
        dec: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى ...',
        button: 'المزيد',
        icon: <FaArrowLeft/>,
        location: '/المدونة',
    },
        {
        id: 3,
        Image: ImageBlog1,
        title:  'عنوان المقال',
        date: '17/12/2024',
        dec: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى ...',
        button: 'المزيد',
        icon: <FaArrowLeft/>,
        location: '/المدونة',
    },
    {
        id: 4,
        Image: ImageBlog1,
        title:  'عنوان المقال',
        date: '17/12/2024',
        dec: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى ...',
        button: 'المزيد',
        icon: <FaArrowLeft/>,
        location: '/المدونة',
    },
] 
export const Company2 = [ 
    {
        Image: ImageFace
    },
        {
        Image: ImageGoog
    },
        {
        Image: ImageYout
    },
        {
        Image: ImagePint
    },
        {
        Image: ImageTwit
    },
        {
        Image: ImageWebf
    },
    {
        Image: ImageFace
    },
        {
        Image: ImageGoog
    },
        {
        Image: ImageYout
    },
        {
        Image: ImagePint
    },
        {
        Image: ImageTwit
    },
        {
        Image: ImageWebf
    },
    {
        ImagePrev: [
            {
                Image: ImagePrev
            },
            {
                Image: ImagePrev
            },
            {
                Image: ImagePrev
            },
            {
                Image: ImagePrev
            },
        ]
    }
]
export const Contact2 = [ 
    {
        title: 'إتصل بنا',
        number: '+966 0789 06541',
        icon: <FiPhoneCall/>,
    },
    {
        title: 'راسلنا عبر البريد الإلكترونى',
        number: '+966 0789 06541',
        icon: <MdOutlineMailOutline/>,

    },
    {
        title: 'راسلنا عبر الواتس',
        number: '+966 0789 06541',
        icon: <FaWhatsapp/>,
    },
    {
        Social: [
            {
                icon: <FaSnapchatGhost/>,
                location: '',
            },
            {
                icon: <TfiTwitterAlt/>,
                location: '',
            },
            {
                icon: <FaInstagram/>,
                location: '',
            },
            {
                icon: <FaLinkedin/>,
                location: '',
            },
            {
                icon: <FaFacebookF/>,
                location: '',
            },
        ]
    }
]
export const SelectDoctorsData = {
    'قسم القلب': [
        { 
            id: 1, 
            name: 'د/ أحمد عبد العزيز', 
            evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
            evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
            colorPary: '#FFBA00',
            color: '#C9C9C9',
            specialty: 'أمراض القلب',
            image: selectDoc1,
            experience: 'التقييم العام من 21 زائر',
            bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
            price: 'سعر الكشف 300 ريال', 
            availableDates: [
                {
                    id: 1,
                    date: "الأربعاء 18 / 12 / 2024",
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }
                },
                {
                    id: 2,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 3,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 4,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 5,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }               
                },
            ]
        },
        { 
            id: 2, 
            name: 'د/ ساره عبد العزيز', 
            evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
            evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
            colorPary: '#FFBA00',
            color: '#C9C9C9',
            specialty: 'أمراض القلب',
            image: selectDoc2,
            experience: 'التقييم العام من 21 زائر',
            bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
            price: 'سعر الكشف 300 ريال', 
            availableDates: [
                {
                    id: 1,
                    date: "الأربعاء 18 / 12 / 2024",
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }
                },
                {
                    id: 2,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 3,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 4,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 5,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }               
                },
            ]
        },
        { 
            id: 3, 
            name: 'د/ أمجد عبد العزيز', 
            evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
            evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
            colorPary: '#FFBA00',
            color: '#C9C9C9',
            specialty: 'أمراض القلب',
            image: selectDoc3,
            experience: 'التقييم العام من 21 زائر',
            bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
            price: 'سعر الكشف 300 ريال', 
            availableDates: [
                {
                    id: 1,
                    date: "الأربعاء 18 / 12 / 2024",
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }
                },
                {
                    id: 2,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 3,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 4,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 5,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }               
                },
            ]
        },
        { 
            id: 4, 
            name: 'د/ ندي عبد العزيز', 
            evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
            evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
            colorPary: '#FFBA00',
            color: '#C9C9C9',
            specialty: 'أمراض القلب',
            image: selectDoc4,
            experience: 'التقييم العام من 21 زائر',
            bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
            price: 'سعر الكشف 300 ريال', 
            availableDates: [
                {
                    id: 1,
                    date: "الأربعاء 18 / 12 / 2024",
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }
                },
                {
                    id: 2,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 3,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 4,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }                
                },
                {
                    id: 5,
                    date: "الخميس 19 / 12 / 2024", 
                    times: {
                        from: "02:00 م",
                        to: "03:00 م"                    
                    }               
                },
            ]
        },
    ],
    'قسم الأعصاب': [
    { 
        id: 1, 
        name: 'د/ أحمد عبد العزيز', 
        evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
        evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        specialty: 'أمراض القلب',
        image: selectDoc1,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 5,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }               
            },
        ]
    },
    { 
        id: 2, 
        name: 'د/ أمجد عبد العزيز', 
        evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
        evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        specialty: 'أمراض القلب',
        image: selectDoc3,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 5,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }               
            },
        ]
    },
    { 
        id: 3, 
        name: 'د/ ندي عبد العزيز', 
        evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
        evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        specialty: 'أمراض القلب',
        image: selectDoc4,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 5,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }               
            },
        ]
    },
    ],
    'قسم العظام': [
    { 
        id: 1, 
        name: 'د/ أحمد عبد العزيز', 
        evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
        evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        specialty: 'أمراض القلب',
        image: selectDoc1,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 5,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }               
            },
        ]
    },
    { 
        id: 2, 
        name: 'د/ ندي عبد العزيز', 
        evaluationPary: [<IoStar key="1"/>, <IoStar key="2"/>, <IoStar key="3"/>],
        evaluation: [<IoStar key="4"/>, <IoStar key="5"/>],
        colorPary: '#FFBA00',
        color: '#C9C9C9',
        specialty: 'أمراض القلب',
        image: selectDoc4,
        experience: 'التقييم العام من 21 زائر',
        bio: 'إستشاري اول أمراض القلب والأوعية الدموعية بمستشفي الجعيدي',
        price: 'سعر الكشف 300 ريال', 
        availableDates: [
            {
                id: 1,
                date: "الأربعاء 18 / 12 / 2024",
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }
            },
            {
                id: 2,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 3,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 4,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }                
            },
            {
                id: 5,
                date: "الخميس 19 / 12 / 2024", 
                times: {
                    from: "02:00 م",
                    to: "03:00 م"                    
                }               
            },
        ]
    },
    ],
}