import fzweb from '/public/image/fzweb.png';
import diana from '/public/image/diana.png';
import onexfy from '/public/image/onexfy.png';
import chatox from '/public/image/chatox.png';
import delivery from '/public/image/onex-delivery.png';

export const projectsData = [
    {
        id: 1,
        name: 'Onexfy ERP',
        description: "Onexfy is an ERP software that centralizes processes for e-commerce, manages logistics, accounting, real-time inventory synchronization with Shopify software and e-commerce software. It has an associated chat center, a digital catalog, and a delivery app..",
        tools: ['Laravel', 'Mysql', 'Quasar Framework', 'Vue Js', 'AWS SES', 'Nginx', 'AWS EC2'],
        role: 'FullStack Developer',
        code: 'https://gitlab.com/olasanmi/onex-erp-app',
        demo: 'https://onexfy.com/',
        image: onexfy,
    },
    {
        id: 2,
        name: 'Dra Diana Pulgarin Web App',
        description: "Diana Pulgarin Web App is the main website of the famous dentist Diana Pulgarin. This website showcases her success stories, result comparisons, appointment scheduling, payment for consultations, and contact options. Additionally, it provides important information about the dentist herself.",
        tools: ['Laravel', 'Mysql', 'Vue Js', 'AWS EC2'],
        role: 'FullStack Developer',
        code: 'https://gitlab.com/olasanmi/dianapappnew',
        demo: 'https://www.dradianapulgarin.com/',
        image: diana,
    },
    {
        id: 3,
        name: 'Chatox',
        description: "Chatox is a messaging application that integrates with the WhatsApp API to provide an omnidirectional communication channel to its clients. It has an API and a messaging broker that allows it to easily connect to other applications.",
        tools: ['Node JS', 'Quasar Framework', 'Mongo DB', 'Vue Js', 'AWS EC2', 'Nest JS', 'RabbitMQ', 'AWS SES'],
        role: 'FullStack Developer',
        code: 'https://gitlab.com/olasanmi/chatox-back',
        demo: 'https://app.chatox.co/',
        image: chatox,
    },
    {
        id: 4,
        name: 'OnexDelivery',
        description: "Onexdelivery is a delivery application that allows companies to manage their own logistics by providing them access to a platform where they can register their senders, delivery personnel, generate dispatch relationships, fulfill orders, and manage them either through an administrator or the mobile app.",
        tools: ['Laravel', 'MySql', 'Vue Js', 'AWS SES'],
        role: 'FullStack Developer',
        code: 'https://gitlab.com/olasanmi/onex-delivery-front',
        demo: 'https://app.onexdelivery.com',
        image: delivery,
    },
    {
        id: 5,
        name: 'OnexDelivery App Mobile',
        description: "Onex Delivery App Mobile is the application used by Onex Delivery couriers to visualize and manage their routes (dispatch relationships). It allows couriers to move associated addresses, change their statuses, add collections, and attach photos as evidence during the delivery process.",
        tools: ['Quasar Framework', 'Capacitor', 'Vue Js'],
        role: 'FullStack Developer',
        code: 'https://gitlab.com/olasanmi/onexdelivery-app',
        demo: 'https://app.onexdelivery.com',
        image: delivery,
    },
    {
        id: 6,
        name: 'FzAutos Web App',
        description: "FZ Autos Web App is the website of the largest luxury car sales company in all of Colombia. It allows users to add vehicles for people to view, manage their credits, and much more",
        tools: ['Quasar Framework', 'Vue Js', 'Laravel', 'Capacitor', 'AWS SES'],
        role: 'FullStack Developer',
        code: 'https://gitlab.com/olasanmi/fz-front',
        demo: 'https://fzautos.co/',
        image: fzweb,
    },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },