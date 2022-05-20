
//? FUNCTIONAL APPROACH
const projectList = document.querySelectorAll('li');
const activeList = document.getElementById('active-projects').querySelector('ul');
const finishedList = document.getElementById('finished-projects').querySelector('ul');

// const STATUS = ['ACTIVE', 'FINSIHED'];
const ACTIVE = 'ACTIVE';
const FINISHED = "FINISHED";
const btnText = ['Finish', 'Activate'];

const getStatus = (DOM) => {
    console.log('asdnj');
    const btn = DOM.querySelector('button').nextElementSibling;
    // btn = btn.nextAdjacentElement;
    if(btn.innerHTML === btnText[0]) {
        return ACTIVE;
    }
    else {return FINISHED;}
}

class Projects {
    status;
    htmlEl;

    constructor(DOM, status = getStatus(DOM)) {
        console.log('he',DOM);
        this.htmlEl = DOM;
        this.status = status;
    }
}

class ProjectList {
    projects = [
        new Projects(projectList[0]),
        new Projects(projectList[1]),
        new Projects(projectList[2])
    ];

    constructor() {
        // this.projects.push(new Projects(projectList[2]));
        //const btn = DOM.querySelector('button').nextElementSibling;
        let i = 0;
        for(const proj of this.projects) {
            console.log(proj.htmlEl.id);
            proj.htmlEl.querySelector('button').nextElementSibling.addEventListener('click',this.changeStatus.bind(this, i, proj.htmlEl.id));
            i++;
        }
    }

    changeStatus(idx, id) {
        if(this.projects[idx].status === ACTIVE) {
            // console.log('aaaaaaaaaaaaaaa',activeList.querySelector(`#${id}`));
            // activeList.querySelector(`#${id}`).remove();
            
            this.projects[idx].htmlEl.querySelector('button').nextElementSibling.innerHTML = `${btnText[1]}`;

            finishedList.appendChild(this.projects[idx].htmlEl);
            this.projects[idx].status = FINISHED;

            console.log('a',this.projects);
            
        }
        else {
            // activeList.querySelector(`#${id}`).remove();
            
            this.projects[idx].htmlEl.querySelector('button').nextElementSibling.innerHTML = `${btnText[0]}`;

            activeList.appendChild(this.projects[idx].htmlEl);
            this.projects[idx].status = ACTIVE;

            console.log('b',this.projects);
        }

        console.log('c');
    }


}

class handler {

    static init() {
        const plist = new ProjectList();

        console.log(plist);
    }
}

handler.init();