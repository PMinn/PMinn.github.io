export default function mid({ params }) {
    if (params?.locale) {
        return {
            props: {
                locale: params?.locale
            }
        }
    }
    return {
        redirect: {
            destination: '/en',
            permanent: false,
        },
    }
}