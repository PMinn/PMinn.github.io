export default function mid({ params }) {
    if (params?.locale) {
        return {
            props: params
        }
    }
    return {
        redirect: {
            destination: '/en',
            permanent: false,
        },
    }
}