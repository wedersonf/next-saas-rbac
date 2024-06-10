import { defineAbilityFor, projectSchema } from "@saas/auth"

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id2' })

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', project))