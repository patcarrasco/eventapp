class EventService
    
    def initialize()
        @client = Ticketmaster.client(apikey: Rails.application.credentials.ticketmaster[:key])
    end

    def client
        @client
    end

    def get_events(params = {})
        self.client.search_events(params: params)
    end

    def get_venues(params = {})
        self.client.search_venues(params:params)
    end

    def get_event(id, params = nil)
        self.client.get_event(id, params: params)
    end

    def get_venue(id, params = nil)
        self.client.get_events(id, params: params)
    end

    def next(response)
        response.next_result
    end

end



