var int_you;
var opn_you;
var ind_you;
var ord_you;
var ent_you;
var asr_you;
var com_you;
var pol_you;
var wtd_you;
var vol_you;
var int_oth;
var opn_oth;
var ind_oth;
var ord_oth;
var ent_oth;
var asr_oth;
var com_oth;
var pol_oth;
var wtd_oth;
var vol_oth;

var int_dis, opn_dis, ind_dis, ord_dis, ent_dis, asr_dis, com_dis, pol_dis, wtd_dis, vol_dis;

var you = [];
var oth = [];
var dis = [];
var avg_you;
var avg_oth;
var pearson;
var similarity;
var similarity_b;
var similarity_c;
var similarity_d;
var lichnost_sim;
var dis_from_center;
var dis_similarity;
var dis_factor;
var cent_factor;
var sim_weight;
var sim_sum;
var weight_sum;

var you_name = "";
var oth_name = "";

function autofill_dev() {
    document.getElementById("int_you").value = 88;
    document.getElementById("opn_you").value = 70;
    document.getElementById("ind_you").value = 33;
    document.getElementById("ord_you").value = 38;
    document.getElementById("ent_you").value = 48;
    document.getElementById("asr_you").value = 43;
    document.getElementById("com_you").value = 50;
    document.getElementById("pol_you").value = 75;
    document.getElementById("wtd_you").value = 88;
    document.getElementById("vol_you").value = 65;
}
function autofill_1() {
    document.getElementById("oth_name").value = "Naruto Uzumaki"
    document.getElementById("int_oth").value = 88;
    document.getElementById("opn_oth").value = 70;
    document.getElementById("ind_oth").value = 33;
    document.getElementById("ord_oth").value = 38;
    document.getElementById("ent_oth").value = 48;
    document.getElementById("asr_oth").value = 43;
    document.getElementById("com_oth").value = 50;
    document.getElementById("pol_oth").value = 75;
    document.getElementById("wtd_oth").value = 88;
    document.getElementById("vol_oth").value = 65;
}
function autofill_2() {
    document.getElementById("oth_name").value = "Albert Einstein"
    document.getElementById("int_oth").value = 88;
    document.getElementById("opn_oth").value = 70;
    document.getElementById("ind_oth").value = 33;
    document.getElementById("ord_oth").value = 38;
    document.getElementById("ent_oth").value = 48;
    document.getElementById("asr_oth").value = 43;
    document.getElementById("com_oth").value = 50;
    document.getElementById("pol_oth").value = 75;
    document.getElementById("wtd_oth").value = 88;
    document.getElementById("vol_oth").value = 65;
}
function autofill_3() {
    document.getElementById("oth_name").value = "Pikachu"
    document.getElementById("int_oth").value = 88;
    document.getElementById("opn_oth").value = 70;
    document.getElementById("ind_oth").value = 33;
    document.getElementById("ord_oth").value = 38;
    document.getElementById("ent_oth").value = 48;
    document.getElementById("asr_oth").value = 43;
    document.getElementById("com_oth").value = 50;
    document.getElementById("pol_oth").value = 75;
    document.getElementById("wtd_oth").value = 88;
    document.getElementById("vol_oth").value = 65;
}
function autofill_4() {
    document.getElementById("oth_name").value = "ChatGPT"
    document.getElementById("int_oth").value = 88;
    document.getElementById("opn_oth").value = 70;
    document.getElementById("ind_oth").value = 33;
    document.getElementById("ord_oth").value = 38;
    document.getElementById("ent_oth").value = 48;
    document.getElementById("asr_oth").value = 43;
    document.getElementById("com_oth").value = 50;
    document.getElementById("pol_oth").value = 75;
    document.getElementById("wtd_oth").value = 88;
    document.getElementById("vol_oth").value = 65;
}
function autofill_5() {
    document.getElementById("oth_name").value = "Golden Retriever"
    document.getElementById("int_oth").value = 88;
    document.getElementById("opn_oth").value = 70;
    document.getElementById("ind_oth").value = 33;
    document.getElementById("ord_oth").value = 38;
    document.getElementById("ent_oth").value = 48;
    document.getElementById("asr_oth").value = 43;
    document.getElementById("com_oth").value = 50;
    document.getElementById("pol_oth").value = 75;
    document.getElementById("wtd_oth").value = 88;
    document.getElementById("vol_oth").value = 65;
}

function log() {
    int_you = document.getElementById("int_you").valueAsNumber;
    opn_you = document.getElementById("opn_you").valueAsNumber;
    ind_you = document.getElementById("ind_you").valueAsNumber;
    ord_you = document.getElementById("ord_you").valueAsNumber;
    ent_you = document.getElementById("ent_you").valueAsNumber;
    asr_you = document.getElementById("asr_you").valueAsNumber;
    com_you = document.getElementById("com_you").valueAsNumber;
    pol_you = document.getElementById("pol_you").valueAsNumber;
    wtd_you = document.getElementById("wtd_you").valueAsNumber;
    vol_you = document.getElementById("vol_you").valueAsNumber;

    int_oth = document.getElementById("int_oth").valueAsNumber;
    opn_oth = document.getElementById("opn_oth").valueAsNumber;
    ind_oth = document.getElementById("ind_oth").valueAsNumber;
    ord_oth = document.getElementById("ord_oth").valueAsNumber;
    ent_oth = document.getElementById("ent_oth").valueAsNumber;
    asr_oth = document.getElementById("asr_oth").valueAsNumber;
    com_oth = document.getElementById("com_oth").valueAsNumber;
    pol_oth = document.getElementById("pol_oth").valueAsNumber;
    wtd_oth = document.getElementById("wtd_oth").valueAsNumber;
    vol_oth = document.getElementById("vol_oth").valueAsNumber;

    similarity = 0;
    similarity_b = 0;
    similarity_c = 0;
    similarity_d = 0;
    lichnost_sim = 0;
    dis_from_center = 0;
    dis_similarity = 0;
    dis_factor = 0;
    cent_factor = 0;
    sim_weight = 0;
    sim_sum = 0;
    weight_sum = 0;
    you = [];
    oth = [];
    dis = [];
    you_name = document.getElementById("you_name").value;
    oth_name = document.getElementById("oth_name").value;

    int_dis = Math.abs(int_you - int_oth);
    opn_dis = Math.abs(opn_you - opn_oth);
    ind_dis = Math.abs(ind_you - ind_oth);
    ord_dis = Math.abs(ord_you - ord_oth);
    ent_dis = Math.abs(ent_you - ent_oth);
    asr_dis = Math.abs(asr_you - asr_oth);
    com_dis = Math.abs(com_you - com_oth);
    pol_dis = Math.abs(pol_you - pol_oth);
    wtd_dis = Math.abs(wtd_you - wtd_oth);
    vol_dis = Math.abs(vol_you - vol_oth);

    you.push(int_you);
    you.push(opn_you);
    you.push(ind_you);
    you.push(ord_you);
    you.push(ent_you);
    you.push(asr_you);
    you.push(com_you);
    you.push(pol_you);
    you.push(wtd_you);
    you.push(vol_you);

    oth.push(int_oth);
    oth.push(opn_oth);
    oth.push(ind_oth);
    oth.push(ord_oth);
    oth.push(ent_oth);
    oth.push(asr_oth);
    oth.push(com_oth);
    oth.push(pol_oth);
    oth.push(wtd_oth);
    oth.push(vol_oth);

    avg_you = you.reduce((sum, value) => sum + value, 0) / you.length;
    avg_oth = oth.reduce((sum, value) => sum + value, 0) / oth.length;

    let cov = 0;
    let varYou = 0;
    let varOth = 0;

    for (let i = 0; i < you.length; i++) {
        const diffYou = you[i] - avg_you;
        const diffOth = oth[i] - avg_oth;

        cov += diffYou * diffOth;
        varYou += diffYou * diffYou;
        varOth += diffOth * diffOth;
    }

    pearson = cov / (Math.sqrt(varYou * varOth));
    similarity = Math.round(((1 + pearson)/2) * 100);

    dis.push(int_dis);
    dis.push(opn_dis);
    dis.push(ind_dis);
    dis.push(ord_dis);
    dis.push(ent_dis);
    dis.push(asr_dis);
    dis.push(com_dis);
    dis.push(pol_dis);
    dis.push(wtd_dis);
    dis.push(vol_dis);
    var avg_dis = dis.reduce((sum, value) => sum + value, 0) / dis.length;
    var similarity_b = Math.round(100 - avg_dis);
    var similarity_c = Math.round((Math.pow((similarity_b / 100),2))*100);

    for (let i = 0; i < you.length; i++) {
        dis_from_center = Math.abs(50-((you[i]+oth[i])/2)); // Between 0 and 50
        dis_similarity = 100-(Math.abs(you[i]-oth[i])); // Between 0 and 100
        dis_factor = (0.00774 * dis_similarity) + 0.226; // Makes the curve steeper
        cent_factor = ((0.0056 * dis_from_center) + 0.72);
        sim_weight = (Math.max(Math.abs(50-you[i]), Math.abs(50-oth[i]))/25) + 0.5;
        similarity_d = (dis_similarity * dis_factor * cent_factor) * 1.1 * sim_weight;
        sim_sum += similarity_d;
        weight_sum += sim_weight;
        lichnost_sim = sim_sum / weight_sum;
        console.log(sim_weight)
    }

    var final_sim = 0;
    var interest_sim = document.getElementById("interest_sim").valueAsNumber;
    var interest_factor = (interest_sim - 50) * 0.3;
    final_sim = lichnost_sim + interest_factor;

    if (final_sim > 100) {
        final_sim = 100;
    }
    else if (final_sim < 0) {
        final_sim = 0;
    }

    document.getElementById("Similarity").innerHTML = "You are " + similarity + "% similar to each other! (Pearson)";
    document.getElementById("Similarity_b").innerHTML = "You are " + similarity_b + "% similar to each other! (Mean Distance)";
    document.getElementById("Similarity_c").innerHTML = "You are " + similarity_c + "% similar to each other! (Quadratic Distance)";
    if (oth_name == "" && you_name == "") {
        document.getElementById("Similarity_d").innerHTML = "You are " + Math.round(final_sim) + "% similar to each other!";
    }
    else if (you_name == "") {
        document.getElementById("Similarity_d").innerHTML = "You are " + Math.round(final_sim) + "% similar to " + oth_name + "!";
    }
    else if (oth_name == "") {
        document.getElementById("Similarity_d").innerHTML = you_name + " is " + Math.round(final_sim) + "% similar to the other person/character!";
    }
    else {
        document.getElementById("Similarity_d").innerHTML = you_name + " is " + Math.round(final_sim) + "% similar to " + oth_name + "!";
    }
}

