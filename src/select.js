// Changes the active koala, then re-renders the page to display that koala
export let selectKoala = koala => {
    activeKoala = koala
    render()
}