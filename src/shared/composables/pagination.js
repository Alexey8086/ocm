import { setLoading } from '#shared/utils/loading'
import { useCharactersStore } from '@/app/stores/CharactersStore'

export const usePaginate = async (page = 1) => {
    const charactersStore = useCharactersStore()

    try {
        setLoading(true, charactersStore)
        const characters = await charactersStore.fetchCharacters(page)
        setLoading(false, charactersStore)
        return characters
    } catch (error) {
        setLoading(false, charactersStore)
    }
}