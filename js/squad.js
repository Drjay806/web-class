const SMs = document.querySelector(".SMs");

$(document).ready(function () {
  $("#1card").hide();
  $("#2card").hide();
  $("#3card").hide();
  $("#infoCardCell").hide();
});

function plusBottonGone() {
  $("#plusButton").hide();
  $("#1card").show();
  $("#table").hide();
  $("#infoCardCell").show();
}

function arrowforward() {
  $("#1card").hide();
  $("#2card").show();
}

function arrowforward2() {
  $("#3card").show();
  $("#2card").hide();
}

function arrowback() {
  $("#1card").show();
  $("#2card").hide();
}

function arrowback2() {
  $("#3card").hide();
  $("#2card").show();
}

$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(document).ready(function () {
  $("select").formSelect();
});

$(document).ready(function () {
  $(".datepicker").datepicker();
});

const renderSMs = (data, id) => {
  const html = `
<li data-id ="${id}">
  <div class="collapsible-header"><i class="material-icons">face</i>${data.Rank} ${data.LastName} ${data.FirstName} </div>
  <div class="collapsible-body">
    <h5 class="header">Contact/Personal Information</h5>
      <div class="row">
          <div class="card-panel">
            <div class="row">     
              <div class=" col s2 right-align">Military email:</div>
              <div class="col s2 left-align">${data.milEmail}</div>
              <div class=" col s2 right-align">Civilan email:</div>
              <div class="col s2 left-align">${data.civilEmail}</div>
              <div class=" col s1 right-align">Cell:</div>
              <div class="col s2 left-align">${data.cellNumber}</div>
            </div>
            <div class="row">  
                <div class="col s6">Address:${data.Address}</div>
                <div class="col s1">DOB:</div>
                <div class="col s2">${data.DOB}</div>

            </div>
          </div>  
      </div>  
  </div>
  <div class="collapsible-body">
    <h5 class="header">Appearance Features</h5>
      <div class="row">
          <div class="card-panel">
            <div class="row">     
              <div class=" col s2 right-align">Eye Color:</div>
              <div class="col s2 left-align">${data.EYECOLOR}</div>
              <div class=" col s2 right-align">Hair Color:</div>
              <div class="col s2 left-align">${data.HAIRCOLOR}</div>
              <div class=" col s2 right-align">Hight:</div>
              <div class="col s2 left-align">${data.Hight}</div>
            </div>
          </div> 
          <div class="row center-align">  
            <div class="">:</div>
        </div> 
      </div>  
  </div>
  <div class="collapsible-body">
    <h5 class="header">Test Dates/Information</h5>
      <div class="row">
          <div class="card-panel">
            <div class="row">     
              <div class=" col s2 right-align">AFCT DATE</div>
              <div class="col s2 left-align">${data.ACFTdate}</div>
              <div class=" col s2 right-align">Push-ups:</div>
              <div class="col s1 left-align">${data.pushups}</div>
              <div class=" col s1 right-align">Sit-ups:</div>
              <div class="col s1 left-align">${data.situps}</div>
              <div class=" col s2 right-align">Run Time:</div>
              <div class="col s1 left-align">${data.runTime}</div>
            </div>
            <div class="row">     
              <div class=" col s3 right-align">Weapons Qual. Date DATE</div>
              <div class="col s3 left-align">${data.qualDate}</div>
              <div class=" col s3 right-align">Weapons Qual. Score</div>
              <div class="col s3 left-align">${data.qualScore}</div>
            
            </div>
          </div> 
      </div>  
  </div>
</li>
`;
  SMs.innerHTML += html;
};
