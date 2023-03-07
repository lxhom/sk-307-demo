import {redirect} from "@sveltejs/kit";

export let POST = ({url}) => {
    throw redirect(307, url.toString().replace("from", "to"))
}
