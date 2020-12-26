/**
 * создавать ячейку
 * передавать в нее данные
 * отлавливать клики и реагировать на них
 *
 */

function ExpandedListModal(title, icon, content) {
    this.title = title;
    this.icon = icon;
    this.content = content;
}


class ExpandedListView {

  cells = [];

  setup(inputModals, parentId) {

      for (let i = 0; i < inputModals.length; i++) {
          const cell = this.createCell(inputModals[i]);
          document.querySelector(parentId).append(cell);
          this.setListeners(cell);
          this.cells.push(cell);
      }

      this.cells[0].children[0].style.marginTop = "0px";
  }

    // noinspection JSMethodCanBeStatic
    createCell(modal) {
        const cell = document.createElement('div');
              cell.innerHTML = `
                    <button class="accordion">  ${modal.icon} ${modal.title}</button>
                    <div class="acc_content">${modal.content}</div>
                    `;
        return cell;
    }

    setListeners(cell) {
        cell.addEventListener('click', (event) => {
            event.preventDefault();
            this.isAlreadySelected(cell) ? this.unselectCell(cell) : this.changeActiveCell(cell)
        })
    }

    unselectCell(cell){
        cell.children[0].classList.remove('is-open');
        cell.children[1].style.maxHeight = null
    }

    isAlreadySelected(cell){
      return cell.children[0].classList.contains('is-open')
    }

    changeActiveCell(current){
        for(let i = 0; i < this.cells.length; i++){
           this.unselectCell(this.cells[i])
        }

        current.children[0].classList.add('is-open');
        let child = current.children[1];
            child.style.maxHeight = child.scrollHeight + 'px';
    }
}


// my-script.js
document.addEventListener("DOMContentLoaded", function() {
    let expandedListView = new ExpandedListView();
        expandedListView.setup(getTestModal(),'.exListContainer');
});



function  getTestModal() {
   return [
       new ExpandedListModal('photography', `<i class="design__icon far fa-image"></i>`, ' First Lorem ipsum dolor sit amet, consectetur adipisicing elit. '),
       new ExpandedListModal('creativity', `<i class="design__icon far fa-image"></i>`, 'Second  Lorem ipsum dolor sit amet, consectetur adipisicing elit. '),
       new ExpandedListModal('three', `<i class="design__icon far fa-image"></i>`, 'Third Lorem ipsum dolor sit amet, consectetur adipisicing elit. ')
   ];
}

