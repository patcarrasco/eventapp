module Adapters

    class TicketmasterAdapter

        attr_reader :client

        def initialize()
            client = Ticketmaster.client(Rails.application.credentials.ticketmaster[:key])
        end

        def get_events(params = {})
            self.client.search_events(params)
        end

        def get_venues(params = {})
            self.client.search_venues(params)
        end

        def get_event(id, params = nil)
            self.client.get_event(id, params)
        end

        def get_venue(id, params = nil)
            self.client.get_events(id, params)
        end

        def next(response)
            response.next_result
        end

    end
end