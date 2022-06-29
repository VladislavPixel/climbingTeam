class Team{
   static allComplects = []
   static currentComplect = []
   static arrObjects = null
   static maxSizeGroup = null
   static depth = 0
   static currentIndex = 0

   static main() {
      const { objects, group } = this.getConfigForPicking()
      this.arrObjects = objects
      this.maxSizeGroup = group

      this.recShowTeams(this.arrObjects.length, this.maxSizeGroup, this.currentIndex, this.depth)

      this.displayComplects()
   }
   static recShowTeams(n, k, index, currentDepth) {
      // Base recursion
      if (n === 0 || k === 0 || k > n) return

      if (index === this.maxSizeGroup) index = this.maxSizeGroup - 1
      this.currentComplect[index] = this.arrObjects[currentDepth]

      this.recShowTeams(n - 1, k - 1, index + 1, currentDepth + 1) // Левая ветка
      if (this.currentComplect.length === this.maxSizeGroup) this.allComplects.push(this.currentComplect.join(""))
      this.currentComplect.pop()
      
      this.recShowTeams(n - 1, k, index, currentDepth + 1) // Правая ветка (примечание: правая ветка углубляется без увеличения индекса; у нас происходит откат из левой ветки)
   }
   static displayComplects() {
      console.log(this.allComplects)
   }
   static getConfigForPicking() {
      const itemsArr = []
      while(true) {
         const value = prompt("Введите один символ, который вы хотите поместить в коробку объектов. Символы не должны повторяться. Если вы закончили с выбором символов нажмите отмена.", "")
         if (value === null) break
         itemsArr.push(value)
      }
      const groupSize = prompt("Укажите размер группы.", "")
      return { objects: itemsArr, group: Number(groupSize) }
   }
}

Team.main()

