import { IElement } from "./components/DynamicAccordion";

let itemsAccordion: IElement[] = [];

function getRandomWord(): string {
  const randomWords = [
    'house', 'car', 'computer', 'book', 'chair', 'lamp', 'shirt', 'shoe',
    'tree', 'mountain', 'river', 'ocean', 'planet', 'cloud', 'star', 'moon', 'sun', 'clock',
    'and', 'or', 'because', 'brains', 'zombie', 'undead', 'graveyard', 'decay', 'creep', 'eerie'
  ];
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

function getRandomName(randomNumber: number): string {
    const personNames = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Hannah",
        "Isaac",
        "Jane"
      ];

      return `${personNames[Math.floor(randomNumber * personNames.length)]} ${randomNumber.toString(5)}`;
}

function getParagraph(extraLong = false): string {
  let output = ''; 
  let i = 0;
  const number = extraLong? 150 : 50;
  while(i++ < number){
    output += `${i>0?' ': ''}${getRandomWord()} `;
  }
  return output;
}

function fillInitialList(): void {
  itemsAccordion.push({
    id: 'first',
    title: 'Patricia',
    content: 'Top-ranked sales manager, contributed to record sales and new account development. Proven ability to lead sales teams to achieve established targets.'
  });
    itemsAccordion.push({
    id: 'second',
    title: 'Edward',
    content: 'Sales manager that offers in-depth understanding of the sales cycle processes and resource management, always focused on customer satisfaction.'
  });
    itemsAccordion.push({
    id: 'third',
    title: 'Andrea',
    content: 'Experienced and “fearless” cold-caller and expert presenter, negotiator and closer! Enjoys working with clients. My aim is to serve well and on time.'
  });
};


export function AddElement(atEnd = false): IElement[] {
    console.log('Going to add one more element....', itemsAccordion);
    const randomNumber = Math.random();
    const item: IElement = {
      id: (randomNumber * 333).toString(8),
      title: getRandomName(randomNumber),
      content: getParagraph(),
      extraContent: randomNumber > 0.6? `${getParagraph(true)}`:'',
    };
    //itemsAccordion.push(item);
    let newItems = [];
    if(atEnd) {
        newItems.push(...itemsAccordion.slice(0), item);
    } else {
        newItems.push(item, ...itemsAccordion.slice(0));
    }
    itemsAccordion = newItems;
    console.log('One more element added....', itemsAccordion);
    return newItems;
  }

export function GetListObject(): IElement[] {
    if(itemsAccordion.length === 0) {
        fillInitialList();
    }
    return itemsAccordion;
}
