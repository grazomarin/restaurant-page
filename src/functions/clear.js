export default function clearPage() {
    while (container.children.length != 1) {
        container.children[1].remove()
    }
}