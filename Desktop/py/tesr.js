

class Node{

    constructor(value) {
        this.value = value;
        this.next=null ;
    }
    

}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFort(value){
        let node = new Node(value) ;
        if (!this.head)
        {
            this.head =node;

        }
        else 
        {let temp = this.head ;
        this.head= node; 
        this.head.next = temp; 
        }
        console.log (this.head);
        return this.head;}


                    removeFront(){
                        if (!this.head){
                            console.log("empty");
                        }
                        else{
                            this.head =this.head.next ; 
                        }
                        console.log (this.head);
                        return this.head;
                    }
    }

let sll = new LinkedList();
let v = sll.addFort(11);
sll.removeFront();


