const mount = document.querySelector('#mount')
const inputs = document.querySelectorAll('input')

const libs = {
  noun1: "", noun2: "",
  adj1: "", adj2: "",
  verb1: "", verb2: "",
  adverb1: "", adverb2: "",
  prep1: "", prep2: "",
  pro1: "", pro2: "",
  con1: "", con2: "",
  inter1: "", inter2: ""
 }

const fillStory = () => {
  [...inputs].map(i => libs[i.id] = i.value.toLowerCase().trim())
  const story = `${libs.inter1.toUpperCase()}! What kind of ${libs.adj1} animal would ${libs.adverb1} ${libs.verb1} into a 7-Eleven,
    ${libs.adverb2} ${libs.verb2} the ${libs.noun2} ${libs.prep1} ${libs.pro1} ${libs.con1} feel anything other
    than ${libs.adj2} unease? ${libs.inter2.charAt(0).toUpperCase() + libs.inter2.slice(1)}--Jay was that kind of animal. ${libs.pro2} would sometimes describe
    the place (${libs.prep2} the furious protestations behind) to me as "comforting", ${libs.con2}
    struck me as somehow deeply perverse.`
  mount.textContent = story;
}

