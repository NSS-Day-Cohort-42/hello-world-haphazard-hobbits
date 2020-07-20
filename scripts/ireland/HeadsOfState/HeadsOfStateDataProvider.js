const headsOfState = [
    {
        title: "President",
        name: "Michael D Higgins",
        link: "https://president.ie/en/the-president/michael-d-higgins"
    },
    {
        title: "Prime Minister",
        name: "Michael Martin",
        link: "https://www.nytimes.com/2020/06/27/world/europe/ireland-prime-minister-micheal-martin.html"
    },
    {
        title: "Leader of the Opposition",
        name: "Mary lou McDonald",
        link: "https://en.wikipedia.org/wiki/Mary_Lou_McDonald"
    },
    {
        title: "Tanaiste",
        name: "Leo Eric Varadkar",
        link: "https://www.finegael.ie/our-people/ministers/dublin/dublin-west/leo-varadkar/"
    }
]

export const useHeads = () => {
    return headsOfState.slice()
}