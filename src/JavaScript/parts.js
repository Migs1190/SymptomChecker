/*-------------------------------Head-------------------------------------*/
let head = `<meta charset="UTF-8" />
<title>Symptom Checker</title>
<!-- Icons -->
<link rel="stylesheet" href="../Fa/css/all.min.css" />
<!-- Links -->
<link rel="stylesheet" href="../css/index.css" />
<link rel="stylesheet" href="../css/utils.css" />
<link rel="stylesheet" href="../css/animation.css" />
<!-- Fonts -->
<style>
  @import url(https://fonts.googleapis.com/css?family=Chakra+Petch:300,300italic,regular,italic,500,500italic,600,600italic,700,700italic);
  @import url(https://fonts.googleapis.com/css?family=Kanit:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
</style>`;

if (document.querySelector(`head`))
  document.querySelector(`head`).innerHTML = head;

/*-------------------------------Header-------------------------------------*/
let Header = `<header id="main-header">
<div class="main-logo logo capitalize">
  <div class="main-flatline-container flatline-container">
    <i class="main-heart heart fa-solid fa-heart-pulse"></i>
    <i class="main-flatline flatline fa-solid fa-circle"></i>
  </div>
  <!-- -/main-flatline-container -->
</div>
<!-- -/main-logo -->
<div class="steps">
<div class="step step-form">
<a href="index.html" class="step-link">
<i class="step-heart fa-solid fa-heart fa-2x"></i>
<span class="step-name">Info Entry</span>
</a> 
</div>
<div class="step step-symptoms">
<a href="symptom_list.html" class="step-link">
<i class="step-heart fa-solid fa-heart fa-2x"></i>
<span class="step-name">Symptoms</span>
</a>
</div>
<div class="step step-results">
<a href="#" class="step-link">
<i class="step-heart fa-solid fa-heart fa-2x"></i>
<span class="step-name">Results</span>

</a>
</div>
</div>
</header>
<!-- #/main-header -->
`;
if (document.querySelector(`#heart-head`))
  document.querySelector(`#heart-head`).innerHTML = Header;

/*-------------------------------Form-------------------------------------*/
// {
//   let form = `<div class="form-content">
// <div class="outer-form relative">
//     <div class="form-counter relative">
//       <input
//         name="age-input"
//         type="text"
//         inputmode="numeric"
//         placeholder="0"
//         maxlength="3"
//         max="122"
//         required
//       />
//       <div class="form-counter-arrows">
//         <i class="prev age-counter fa-solid fa-chevron-left fa-2x"></i>
//         <i class="next age-counter fa-solid fa-chevron-right fa-2x"></i>
//       </div>
//       <!-- ./form-counter-arrows -->
//     </div>
//     <!-- ./form-counter -->
//     <div class="note-msg">
//     <i class="note fa-regular fa-circle-question"></i>
//     <div class="note-window">The oldest a human has ever lived is 122 years and 164 days, as verified by the Guinness World Records.</div>
//     </div>
//     <!-- ./note-msg -->
// </div>
// <!-- ./outer-form -->
// <div class="form-buttons">
//   <a href="#" class="gender-btn male-btn">
//     <i class="fa-solid fa-mars fa-lg"></i>
//   </a>
//   <a href="#" class="gender-btn female-btn">
//     <i class="fa-solid fa-venus fa-lg"></i>
//   </a>
// </div>
// </div>
// <!-- ./form-content -->`;
//   if (document.querySelector(`#starting-form`))
//     document.querySelector(`#starting-form`).innerHTML = form;
// }
/*-------------------------------Symptoms-------------------------------------*/
// {
//   let list = `
// <section class="left-list">
// <div class="choice">
//   <input type="checkbox" name="check" />
// </div>
// </section>`;

//   if (document.querySelector(`#list`))
//     document.querySelector(`#list`).innerHTML = list;
// }
